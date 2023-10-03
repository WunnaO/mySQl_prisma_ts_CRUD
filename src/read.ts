import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Read() {
  try {
    const res = await prisma.user.findMany();
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

Read();
