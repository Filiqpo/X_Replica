import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTweet = (tweetData) => {
  return prisma.tweet.create({
    data: tweetData,
  });
};
