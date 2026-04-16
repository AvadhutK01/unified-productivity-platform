import { postgresDb } from './postgres';
import { mongoDb } from './mongo';

export const connectDatabases = async (): Promise<void> => {
  try {
    console.log('⏳ Connecting to databases...');
    
    // Connect concurrently
    await Promise.all([
      postgresDb.connect(),
      mongoDb.connect()
    ]);

    console.log('🚀 All databases connected successfully');
  } catch (error) {
    console.error('💥 Failed to connect to databases. Shutting down...');
    process.exit(1);
  }
};
