import asyncRouter from '../core/asyncRouter';

import db from '../database/db';
import { Mission, Reward } from '../database/models';

const router = asyncRouter();

router.post('/', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');

  const transaction = await db.transaction();
  const user = req.user;

  const missions = await Mission.findAllByIdx(user.idx);
  const rewards = await Reward.findAllByIdx(user.idx);

  if(rewards.length >= missions.length) {
    res.json({message: '응모권이 없습니다.'});
    return;
  }

  

  await db.commit();
  

  res.json({ missions });
});

export default router;
