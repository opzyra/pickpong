import axios from 'axios';

import asyncRouter from '../core/asyncRouter';
import { Mission } from '../database/models';

const router = asyncRouter();

router.get('/user', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');

  const user = req.user;
  const missions = await Mission.findAllByIdx(user.idx);

  res.json({ missions });
});

router.post('/follow', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');

  let user = req.user;
  const missions = await Mission.findAllByIdx(user.idx);
  const history = missions.filter(
    mission => mission.fk_user_idx === user.idx && mission.type === 2,
  );

  if (history.length != 0) {
    res.json({ status: 'error' });
    return;
  }

  const { data: followers } = await axios.get(
    `https://api.github.com/users/${user.id}/following`,
  );
  const followStatus = followers.filter(
    follower => follower.login === 'opzyra',
  );

  if (followStatus.length == 0) {
    res.json({ status: 'notfound' });
    return;
  }

  await Mission.upsert({
    fk_user_idx: user.idx,
    type: 2,
  });

  res.json({ status: 'ok' });
});

router.post('/resume', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');

  let user = req.user;
  const missions = await Mission.findAllByIdx(user.idx);
  const history = missions.filter(
    mission => mission.fk_user_idx === user.idx && mission.type === 3,
  );

  if (history.length != 0) {
    res.json({ status: 'error' });
    return;
  }

  await Mission.upsert({
    fk_user_idx: user.idx,
    type: 3,
  });

  res.json({ status: 'ok' });
});

export default router;
