import { Router } from 'express';

import SessionController from './App/Controllers/SessionController';
// import Auth from './App/middlewares/auth';
import RecipientsController from './App/Controllers/RecipientsController';

const router = new Router();

// router.use(Auth);
router.post('/login', SessionController.store);

router.post('/recipient', RecipientsController.store);

export default router;
