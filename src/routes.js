import { Router } from 'express';
import SessionController from './App/Controllers/SessionController';

const router = new Router();

router.post('/login', SessionController.store);

export default router;
