import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectPostgres = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log('Connected to PostgreSQL via Prisma successfully.');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
    process.exit(1);
  }
};

export default prisma;
