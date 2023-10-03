import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Update() {
  try {
    const res = await prisma.user.updateMany({
      where: {
        id: 2,
      },
      data: {
        age: 19,
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

Update();
