import { Router } from 'express';

import SessionController from './App/Controllers/SessionController';
import RecipientsController from './App/Controllers/RecipientsController';

import Auth from './App/middlewares/auth';
import AuthAdmin from './App/middlewares/authAdmin';

const routes = new Router();

routes.post('/login', SessionController.store);

routes.use(Auth);
routes.use(AuthAdmin);

routes.post('/recipient', RecipientsController.store);
routes.put('/recipient/:id', RecipientsController.update);
routes.get('/recipient', RecipientsController.index);
routes.get('/recipient/:id', RecipientsController.show);
routes.delete('/recipient/:id', RecipientsController.delete);

export default routes;
