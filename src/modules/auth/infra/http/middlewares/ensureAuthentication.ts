import { NextFunction, Request, Response } from 'express';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

import { AppError } from '@shared/entities/AppError';

export const ensureAuthentication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Verify user's authenticity with Oauth
    jwt({
      secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.AUTH0_JWKS_URI!,
      }),
      issuer: process.env.AUTH0_ISSUER,
      algorithms: ['RS256'],
    })(req, res, (err) => {
      if (err) next(new AppError(err.message, err.status));

      const { user } = req;

      if (user) {
        // @ts-ignore
        req.oAuthUser = req.user;

        req.user = {
          id: user.id || user.sub,
        };
      }

      next();
    });
  } catch (e: any) {
    throw new AppError(e.message, e.statusCode);
  }
};
