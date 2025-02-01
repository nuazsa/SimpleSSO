import express from 'express';
import authenticateToken from '../middleware/auth-middleware.js';
import healthController from '../controller/health-controller.js';

const apiRouter = new express.Router();

apiRouter.use(authenticateToken);

apiRouter.get('/api/up', healthController.ping)

export {
  apiRouter
}