import mongoose from 'mongoose';

const ClockSchema = new mongoose.Schema({
	clockId: { type: String, required: true },
	date: { type: Date, required: true },
	eventName: { type: String, required: true },
});

export default mongoose.model('Clock', ClockSchema);