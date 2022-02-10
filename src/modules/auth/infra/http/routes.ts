import { Router } from 'express';
import { AuthController } from './controllers/authController';
import { ensureAuthentication } from './middlewares/ensureAuthentication';

const authRouter = Router();

authRouter.post('/auth/oauth/signup', ensureAuthentication, AuthController.signUpWithOAuth);

export default authRouter;
