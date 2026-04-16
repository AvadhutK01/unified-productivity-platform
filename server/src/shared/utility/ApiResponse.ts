import { Response } from 'express';

interface ApiResponseParams<T> {
  res: Response;
  status?: number;
  message?: string;
  data?: T;
  metadata?: Record<string, unknown>;
}

export class ApiResponse {
  public static send<T>({
    res,
    status = 200,
    message = 'Success',
    data,
    metadata,
  }: ApiResponseParams<T>): Response {
    return res.status(status).json({
      success: true,
      message,
      data: data || null,
      metadata,
    });
  }
}
