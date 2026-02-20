import bcrypt from "bcryptjs";

export const createUser = async (userData) => {
  const { prisma } = useNitroApp();
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  return prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword,
    },
  });
};
