import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMediaFile = (mediaFile) => {
  return prisma.mediaFile.create({
    data: mediaFile,
  });
};
