import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import userRouter from './routes/users';
import colors from 'colors';

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(colors.bgCyan(`Server is running on http://localhost:${PORT}`));
});