import { Router } from 'express';
import randomstring from 'randomstring';
import countdownClock from '../schema/clockSchema';
const router = Router();

router.get('/', (_req, res) => res.render('createCountdown'));
router.get('/create', async (req, res) => {
	let { month, day, year, eventName, toRedirect } = req.query;
	if(!month) return res.status(400).json({ statusCode: 200, error: 'Bad Request - Missing \'month\' value from request.' });
	if(!day) return res.status(400).json({ statusCode: 200, error: 'Bad Request - Missing \'day\' value from request.' });
	if(!year) return res.status(400).json({ statusCode: 200, error: 'Bad Request - Missing \'year\' value from request.' });
	if(!eventName) return res.status(400).json({ statusCode: 200, error: 'Bad Request - Missing \'eventName\' value from request.' });
	if(!toRedirect) return toRedirect = "off"

	const newClock = await new countdownClock({
		clockId: randomstring.generate(8),
		date: new Date(`${month} ${day}, ${year}`),
		eventName,
	}).save();


	if(toRedirect === 'off') {
		return res.status(201).json({
			message: 'Completed function',
			dataSubmitted: {
				clockId: randomstring.generate(8),
				date: newClock.date,
				eventName,
				internalId: newClock._id,
			},
			dataReturned: {
				url: `https://almost-ti.me/countdown?code=${newClock.clockId}`,
			},
		});
	}
	else {
		return res.redirect(`/countdown?code=${newClock.clockId}`);
	}


});

export default router;