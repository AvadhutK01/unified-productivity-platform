import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';
import { logger } from '../logger/logger';
import { env } from '../../config/env';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let error = err;

  if (!(error instanceof AppError)) {
    // If it's a generic error, we force it into our AppError wrapper temporarily
    const statusCode = error.statusCode || error.status || 500;
    const message = error.message || 'Internal Server Error';
    error = new AppError(message, statusCode as number, false);
    // Overwrite the newly generated stack trace with the original error's stack
    if (err.stack) {
      error.stack = err.stack;
    }
  }

  // Log non-operational errors (crash threats) to the logging system
  if (!error.isOperational) {
    logger.error(`Critical Server Error: ${error.message} \n ${error.stack}`);
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    errors: error.errors,
    ...(env.NODE_ENV === 'development' && { stack: error.stack }),
  });
};
