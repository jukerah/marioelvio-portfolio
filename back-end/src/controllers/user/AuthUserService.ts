import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
  username: string;
  password: string;
}

class AuthUserService {
  async execute({ username, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        username: username
      }
    })
    
    if (!user) throw new Error("Username or password is incorrect!");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Username or password is incorrect!");

    const token = sign(
      {
        username: user.username,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    );
    
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      token: token
    };
  }
}

export { AuthUserService }