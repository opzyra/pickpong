import asyncRouter from '../core/asyncRouter';
import reward from '../lib/reward';

import { Mission, Reward, Comment, Email } from '../database/models';
import db from '../database/db';

const router = asyncRouter();

router.get('/', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');
  const user = req.user;
  const rewards = await Reward.findAllByUserIdx(user.idx);
  res.json({ rewards });
});

router.post('/', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');
  const user = req.user;

  const missions = await Mission.findAllByIdx(user.idx);
  const rewards = await Reward.findAllByUserIdx(user.idx);

  if (rewards.length >= missions.length) {
    res.json({ reward: null });
    return;
  }

  const [type, deg] = reward();

  await Reward.create({
    fk_user_idx: user.idx,
    type,
    used: false,
  });

  res.json({ reward: { type, deg } });
});

router.post('/receive', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');
  const user = req.user;
  const { idx, value } = req.body;

  if (value.length > 100) {
    throw new Error('Value Length Over');
  }

  const transaction = await db.transaction();

  const reward = await Reward.findAllByIdx(idx);

  if (reward.fk_user_idx !== user.idx) {
    throw new Error('Not Fk Matched');
  }

  if (reward.used) {
    throw new Error('Reward Used');
  }

  await Reward.update(
    {
      used: true,
    },
    { where: { idx }, transaction },
  );

  if (reward.type === 4) {
    await Comment.create(
      {
        fk_reward_idx: idx,
        contents: value,
      },
      { transaction },
    );
  } else {
    await Email.create(
      {
        fk_reward_idx: idx,
        email: value,
        provide: false,
      },
      { transaction },
    );
  }
  await transaction.commit();

  res.json({ status: 'ok' });
});

export default router;
