import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  return prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword,
    },
  });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username: username,
    },
  });
};

export const getUserById = (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
