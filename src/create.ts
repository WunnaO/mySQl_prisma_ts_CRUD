import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Create() {
  try {
    const iData = [
      { id: 8, name: "Win", age: 30, gender: "female", city: "Yangon" },
      { id: 9, name: "Wanna", age: 55, gender: "male", city: "Yangon" },
    ];

    const newUser = {
      id: 10,
      name: "Aun",
      age: 28,
      gender: "female",
      city: "Myeik",
    };

    const res = await prisma.user.createMany({
      data: newUser,
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

Create();
