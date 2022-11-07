import { Request, Response } from "express";
import { AuthUserService } from "../../controllers/user/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({
      username,
      password
    });

    return res.json(auth);
  }
}

export { AuthUserController }