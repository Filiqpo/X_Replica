import { PrismaClient } from "@prisma/client";

export default defineNitroPlugin((nitroApp) => {
  const prisma = new PrismaClient();

  nitroApp.hooks.hook("close", async () => {
    await prisma.$disconnect();
  });

  nitroApp.prisma = prisma;
});
