import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createRefreshToken = (refreshToken) => {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
};

export const getRefreshTokenByToken = (token) => {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
};
