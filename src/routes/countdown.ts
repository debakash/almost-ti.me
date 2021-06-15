import { Router } from 'express';
import countdownClock from '../schema/clockSchema';
const router = Router();

router.get('/', async (req, res) => {
	const { code } = req.query;
	if (!code) return res.redirect('/');
	const clock = await countdownClock.findOne({ clockId: code });
	const date = clock.date;
	return res.render('countdown', {
		eventName: clock.eventName,
		date,
	});
});

export default router;
