import axios from 'axios';

import asyncRouter from '../core/asyncRouter';
import * as jwt from '../lib/jwt';

import db from '../database/db';
import User from '../database/models/User';
import Mission from '../database/models/Mission';

const router = asyncRouter();

router.get('/', async (req, res) => {
  const { GIT_CLIEND_ID, GIT_REDIRECT_URL } = process.env;
  return res.json({
    authUrl: `https://github.com/login/oauth/authorize?client_id=${GIT_CLIEND_ID}&redirect_uri=${GIT_REDIRECT_URL}`,
  });
});

router.post('/', async (req, res) => {
  const {
    GIT_CLIEND_ID: client_id,
    GIT_CLIENT_SECRET: client_secret,
  } = process.env;
  const { code } = req.body;

  const transaction = await db.transaction();

  const response = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      code,
      client_id,
      client_secret,
    },
    {
      headers: {
        accept: 'application/json',
      },
    },
  );
  const token = response.data.access_token;

  const { data: git } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const [torkenRefreshResult] = await User.update(
    {
      token,
    },
    { where: { id: git.login } },
  );

  let user = null;

  if (torkenRefreshResult == 0) {
    user = await User.create(
      {
        id: git.login,
        name: git.name || git.login,
        avatar: git.avatar_url,
        token: token,
      },
      { transaction },
    );

    await Mission.upsert(
      {
        fk_user_idx: user.idx,
        type: 1,
      },
      { transaction },
    );
  } else {
    user = await User.findById(git.login);
  }

  const access_token = await jwt.generate({ user });

  await transaction.commit();

  return res.json({ access_token });
});

router.post('/refresh', async (req, res) => {
  const { user } = req.body;

  if (!user) {
    throw new Error('Invalidate User');
  }

  const { idx, token } = await User.findById(user.id);
  const { data: git } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  await User.update(
    {
      id: git.login,
      name: git.name || git.login,
      avatar: git.avatar_url,
    },
    {
      where: { idx },
    },
  );

  const refreshUser = await User.findById(git.login);

  const access_token = await jwt.generate({ user: refreshUser });

  return res.json({ access_token });
});

export default router;
