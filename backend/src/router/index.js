import asyncRouter from '../core/asyncRouter';

import auth from './auth';

const router = asyncRouter();

router.use('/auth', auth);

export default router;
