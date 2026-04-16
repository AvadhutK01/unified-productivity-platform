"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../../config/env");
class MongoDB {
    async connect() {
        try {
            mongoose_1.default.connection.on('connected', () => {
                console.log('✅ Connected to MongoDB');
            });
            mongoose_1.default.connection.on('error', (err) => {
                console.error('❌ MongoDB connection error:', err);
            });
            mongoose_1.default.connection.on('disconnected', () => {
                console.warn('⚠️ MongoDB disconnected');
            });
            await mongoose_1.default.connect(env_1.env.MONGO_URI, {
                serverSelectionTimeoutMS: 5000,
            });
        }
        catch (error) {
            console.error('❌ Error connecting to MongoDB:', error);
            throw error;
        }
    }
    async disconnect() {
        await mongoose_1.default.disconnect();
    }
}
exports.mongoDb = new MongoDB();
