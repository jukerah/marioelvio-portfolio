import prismaClient from "../../prisma";

class DetailUserService {
  async execute() {
    const user = await prismaClient.user.findFirst({
      select: {
        email: true,
        phone: true,
        address: true,
        linkedin: true,
        github: true,
        youtube: true
      }
    })

    return user;
  }
}

export { DetailUserService }