import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SignUpWithOauthUseCase from '@modules/auth/usecases/signUpWithOauthUseCase';

export class AuthController {
  static async signUpWithOAuth(req: Request, res: Response): Promise<Response> {
    const oAuthUserData = req.oAuthUser;

    const result = await container.resolve(SignUpWithOauthUseCase).execute(oAuthUserData);

    return res.status(201).send({ created: result });
  }
}
