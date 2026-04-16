"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabases = void 0;
const postgres_1 = require("./postgres");
const mongo_1 = require("./mongo");
const connectDatabases = async () => {
    try {
        console.log('⏳ Connecting to databases...');
        // Connect concurrently
        await Promise.all([
            postgres_1.postgresDb.connect(),
            mongo_1.mongoDb.connect()
        ]);
        console.log('🚀 All databases connected successfully');
    }
    catch (error) {
        console.error('💥 Failed to connect to databases. Shutting down...');
        process.exit(1);
    }
};
exports.connectDatabases = connectDatabases;
