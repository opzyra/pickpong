import asyncRouter from '../core/asyncRouter';
import { Comment } from '../database/models';

const router = asyncRouter();

router.get('/', async (req, res) => {
  const { page = 1 } = req.query;

  const items = await Comment.findAllPage(page);

  const count = await Comment.count();
  const calPageCount = Math.floor(count / 5);
  let pageCount = count % 5 > 0 ? calPageCount + 1 : calPageCount;

  res.json({ items, count, pageCount });
});

export default router;
