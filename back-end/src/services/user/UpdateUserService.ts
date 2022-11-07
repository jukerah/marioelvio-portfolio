import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  id_user: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  youtube: string;
}

class UpdateUserService {
  async execute({
    id_user,
    email,
    phone,
    linkedin,
    github,
    youtube
  }: UserRequest) {

    if (!id_user) throw new Error("Id is required!");
    if (!email) throw new Error("Email is required!");
    
    const user = await prismaClient.user.update({
      where: {
        id: id_user
      },
      data: {
        email: email,
        phone: (!phone) ? "" : phone,
        linkedin: (!linkedin) ? "" : linkedin,
        github: (!github) ? "" : github,
        youtube: (!youtube) ? "" : youtube
      },
      select: {
        email: true,
        phone: true,
        linkedin: true,
        github: true,
        youtube: true
      }
    });

    return user;
  }
}

export { UpdateUserService }