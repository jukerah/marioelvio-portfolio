import prismaClient from "../../prisma";

class DetailUserService {
  async execute() {
    const registeredUser = await prismaClient.user.aggregate({
      _count: {
        id: true,
      },
    });

    if (registeredUser._count.id === 0) throw new Error("No registered user!");

    const user = await prismaClient.user.findFirst({
      select: {
        email: true,
        phone: true,
        linkedin: true,
        github: true,
        youtube: true
      }
    })

    return user;
  }
}

export { DetailUserService }