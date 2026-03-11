import mongoose from 'mongoose';

const connectDB = async(DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL,{
            dbName:'userData'
        });
        console.log('mongodb connected successfully');
    } catch (error) {
      console.log('DB error', error.message);
      process.exit(1)

    }
}
export default connectDB;