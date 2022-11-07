import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ username, email, password }: UserRequest) {
    if (!username) throw new Error("Name is required!");
    if (!email) throw new Error("Email is required!");
    if (!password) throw new Error("Password is required!");
    
    const userAlreadyRegistered = await prismaClient.user.aggregate({
      _count: {
        id: true,
      },
    });

    if (userAlreadyRegistered._count.id >= 1) throw new Error("User already registered!");

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        username: username,
        email: email,
        password: passwordHash,
        phone: "",
        linkedin: "",
        github: "",
        youtube: ""
      }
    });

    return user;
  }
}

export { CreateUserService }