import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ hello: 'word' });
});

routes.post('/sessions', SessionController.store);

// Todas as rotas que forem chamadas a partir daqui tem que ser autenticada
routes.use(authMiddleware);

routes.post('/users', RecipientController.store);
routes.put('/users', RecipientController.update);

export default routes;
