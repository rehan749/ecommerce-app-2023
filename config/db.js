import mongoose from "mongoose";
import colors from "colors";


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
  }
};

mongoose.set('strictQuery', false);


export default connectDB;
