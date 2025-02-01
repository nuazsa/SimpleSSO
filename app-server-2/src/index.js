import express from 'express';
import { apiRouter } from './route/api.js';
import errorMiddleware from './middleware/error-middleware.js';

const app = express();
const port = process.env.PORT || 3002;

app.use(apiRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});