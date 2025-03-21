import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('The server is running!');
});

app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
  console.log(`Your password is ${process.env.SECRET_PASSWORD}`);
});
