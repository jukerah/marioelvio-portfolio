import { Router, Request, Response } from 'express';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { DetailUserController } from '../controllers/user/DetailUserController';
import { AuthUserController } from '../services/user/AuthUserController';

import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
  return res.json({ status: "Servidor Online" });
});

router.post('/user', new CreateUserController().handle);
router.get('/user', new DetailUserController().handle);
router.post('/session', new AuthUserController().handle);

export { router };