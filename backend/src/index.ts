import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import colors from 'colors';
import connectDB from './config/database';
import errorHandler from './middlewares/Errors';
import userRouter from './routes/users';


const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/users', userRouter);

app.use(errorHandler);

const connect = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(colors.bgCyan(`Server is running on http://localhost:${PORT}`));
  });
}

connect();