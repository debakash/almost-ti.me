import mongoose from 'mongoose';

const mongooseConnector = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB as string, {
			useFindAndModify: true,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
	}
	catch (error) {
		console.log(error);
	}
};

export default mongooseConnector;