import asyncRouter from '../core/asyncRouter';

import auth from './auth';
import mission from './mission';

const router = asyncRouter();

router.use('/auth', auth);
router.use('/mission', mission);

export default router;
