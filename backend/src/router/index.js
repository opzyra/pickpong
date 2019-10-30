import asyncRouter from '../core/asyncRouter';

import auth from './auth';
import mission from './mission';
import reward from './reward';
import comment from './comment';

const router = asyncRouter();

router.use('/auth', auth);
router.use('/mission', mission);
router.use('/reward', reward);
router.use('/comment', comment);

export default router;
