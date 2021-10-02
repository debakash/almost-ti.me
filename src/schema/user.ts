import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	passwordHash: { type: String, required: true }
});

export default mongoose.model('user', UserSchema);