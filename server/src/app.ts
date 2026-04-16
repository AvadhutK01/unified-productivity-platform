import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { logger } from './shared/logger/logger';
import { globalErrorHandler } from './shared/errors/errorHandler';
import { AppError } from './shared/errors/AppError';
import { asyncHandler } from './shared/utility/asyncHandler';
import { ApiResponse } from './shared/utility/ApiResponse';

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morganFormat = process.env.NODE_ENV !== 'production' ? 'dev' : 'combined';
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

app.get('/error-test', asyncHandler(async (req: Request, res: Response) => {
  throw new AppError('This is a simulated critical database error!', 503, false);
}));

app.get('/health', (req: Request, res: Response) => {
  ApiResponse.send({
    res,
    status: 200,
    message: 'Health check passed',
    data: { timestamp: new Date().toISOString() },
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

export default app;
