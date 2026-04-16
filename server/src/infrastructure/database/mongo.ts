import mongoose from 'mongoose';
import { env } from '../../config/env';

class MongoDB {
  public async connect(): Promise<void> {
    try {
      mongoose.connection.on('connected', () => {
        console.log('✅ Connected to MongoDB');
      });

      mongoose.connection.on('error', (err: Error) => {
        console.error('❌ MongoDB connection error:', err);
      });

      mongoose.connection.on('disconnected', () => {
        console.warn('⚠️ MongoDB disconnected');
      });

      await mongoose.connect(env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
      });
    } catch (error) {
      console.error('❌ Error connecting to MongoDB:', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}

export const mongoDb = new MongoDB();
