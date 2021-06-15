import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	username: String,
	passwordHash: String,
});

export default mongoose.model('user', UserSchema);