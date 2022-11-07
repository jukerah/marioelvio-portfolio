import { Router, Request, Response } from 'express';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { DetailUserController } from '../controllers/user/DetailUserController';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
  return res.json({ status: "Servidor Online" });
});

router.post('/user', new CreateUserController().handle);
router.get('/user', new DetailUserController().handle);


export { router };