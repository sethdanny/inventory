import mongoose, {ConnectOptions, Mongoose} from 'mongoose';
import colors from 'colors';

const connectDB = async (): Promise<void> => {
    try {
        const conn: Mongoose = await mongoose.connect(process.env.MONGO_URI as string, 
            { dbName: 'inventory' } as ConnectOptions);
        console.log(colors.red(`MongoDB Connected: ${conn.connection.host}`));
    } catch (error: Error | any) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB;