import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Delete() {
  try {
    const res = await prisma.user.deleteMany({
      where: {
        id: 1,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

Delete();
