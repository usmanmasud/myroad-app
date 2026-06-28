// @ts-ignore — generated after `prisma generate`
import { PrismaClient } from "@prisma/client";
import { createPgAdapter } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma: InstanceType<typeof PrismaClient> };

export const prisma: InstanceType<typeof PrismaClient> =
  globalForPrisma.prisma ?? new PrismaClient({
    adapter: createPgAdapter({
      connectionString: process.env.DATABASE_URL,
    }),
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
