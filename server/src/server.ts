import app from './app';
import { env } from './config/env';
import { connectDatabases } from './infrastructure/database';

const startServer = async () => {
  try {
    await connectDatabases();

    app.listen(env.PORT, () => {
      console.log(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
