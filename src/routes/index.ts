import { Router } from 'express';
const router = Router();

import clock from './clock';
import countdown from './countdown';

router.get('/', (_req, res) => res.render('index'));
router.get('/create', (_req, res) => res.render('createCountdown'));
router.use('/clock', clock);
router.use('/countdown', countdown);

export default router;
