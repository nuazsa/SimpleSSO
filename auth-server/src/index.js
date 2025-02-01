import express from 'express';
import dotenv from 'dotenv';
import { publicRouter } from './route/public-api.js';
import errorMiddleware from './middleware/error-middleware.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(publicRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});