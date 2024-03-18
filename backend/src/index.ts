import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 5001;


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});