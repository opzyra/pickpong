import axios from 'axios';

import asyncRouter from '../core/asyncRouter';
import * as jwt from '../lib/jwt';

import User from '../database/models/User';

const router = asyncRouter();

router.get('/', async (req, res) => {
  const { GIT_CLIEND_ID, GIT_REDIRECT_URL } = process.env;
  return res.json({
    redirect: `https://github.com/login/oauth/authorize?cliend_id=${GIT_CLIEND_ID}&redirect_uri=${GIT_REDIRECT_URL}`,
  });
});

router.post('/', async (req, res) => {
  const {
    GIT_CLIEND_ID: client_id,
    GIT_CLIENT_SECRET: client_secret,
  } = process.env;
  const { code } = req.body;

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

  await User.upsert({
    id: git.login,
    name: git.name,
    avatar: git.avatar_url,
    token: token,
  });

  const user = await User.findById(git.login);
  const access_token = await jwt.generate({ user });

  return res.json({ access_token });
});

router.post('/refresh', async (req, res) => {
  const { user } = req;

  if (!user) {
    throw new Error('Invalidate User');
  }

  const { token } = await User.findById(user.id);

  const { data: git } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  await User.upsert({
    id: git.login,
    name: git.name,
    avatar: git.avatar_url,
  });

  const refreshUser = await User.findById(git.login);
  const access_token = await jwt.generate({ user: refreshUser });

  return res.json({ access_token });
});

export default router;
