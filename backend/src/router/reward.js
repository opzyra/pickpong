import asyncRouter from '../core/asyncRouter';
import reward from '../lib/reward';

import { Mission, Reward } from '../database/models';

const router = asyncRouter();

router.get('/', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');
  const user = req.user;
  const rewards = await Reward.findAllByIdx(user.idx);
  res.json({ rewards });
});

router.post('/', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');
  const user = req.user;

  const missions = await Mission.findAllByIdx(user.idx);
  const rewards = await Reward.findAllByIdx(user.idx);

  if (rewards.length >= missions.length) {
    res.json({ reward: null });
    return;
  }

  const [type, deg] = reward();

  await Reward.create({
    fk_user_idx: user.idx,
    type,
  });

  res.json({ reward: { type, deg } });
});

export default router;
