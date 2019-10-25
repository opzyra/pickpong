import asyncRouter from '../core/asyncRouter';
import { Mission } from '../database/models';

const router = asyncRouter();

router.get('/user', async (req, res) => {
  if (!req.user) throw new Error('Not Found User');

  const user = req.user;
  const missions = await Mission.findAllByIdx(user.idx);

  res.json({ missions });
});

export default router;
