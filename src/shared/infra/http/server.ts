import 'reflect-metadata';
import 'express-async-errors';

import Express, { Request, Response, NextFunction } from 'express';

import '@shared/containers';

import routes from './routes';
import { AppError } from '@shared/entities/AppError';

const app = Express();

app.use(Express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  req.user = {};
  next();
});

app.use('/api', routes);

// handles async errors
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: true,
      message: err.message,
    });
  }

  return res.status(500).json({
    error: true,
    message: 'Internal server error',
  });
});

export default app;
