"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresDb = void 0;
const client_1 = require("../../../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const env_1 = require("../../config/env");
class PostgresDB {
    prisma;
    constructor() {
        const adapter = new adapter_pg_1.PrismaPg({ connectionString: env_1.env.DATABASE_URL });
        this.prisma = new client_1.PrismaClient({
            adapter,
            log: env_1.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        });
    }
    async connect() {
        try {
            await this.prisma.$connect();
            console.log('✅ Connected to PostgreSQL');
        }
        catch (error) {
            console.error('❌ Error connecting to PostgreSQL:', error);
            throw error;
        }
    }
    async disconnect() {
        await this.prisma.$disconnect();
    }
}
exports.postgresDb = new PostgresDB();
