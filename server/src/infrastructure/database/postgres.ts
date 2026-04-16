import { PrismaClient } from '../../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from '../../config/env';

class PostgresDB {
  public prisma: PrismaClient;

  constructor() {
    const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
    this.prisma = new PrismaClient({
      adapter,
      log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
  }

  public async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
      console.log('✅ Connected to PostgreSQL');
    } catch (error) {
      console.error('❌ Error connecting to PostgreSQL:', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}

export const postgresDb = new PostgresDB();
