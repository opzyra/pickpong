import asyncRouter from '../core/asyncRouter';

import auth from './auth';
import mission from './mission';
import reward from './reward';

const router = asyncRouter();

router.use('/auth', auth);
router.use('/mission', mission);
router.use('/reward', reward);

export default router;
