import { Request, Response } from "express";
import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const {
      id_user,
      email,
      phone,
      linkedin,
      github,
      youtube
    } = req.body;

    const createUserService = new UpdateUserService();

    const user = await createUserService.execute({
      id_user,
      email,
      phone,
      linkedin,
      github,
      youtube
    });

    return res.json(user);
  }
}

export { UpdateUserController }