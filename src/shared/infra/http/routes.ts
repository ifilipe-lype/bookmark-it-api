import { Router } from 'express';
import authRouter from '@modules/auth/infra/http/routes';

const appRoutes = Router();

// mounts all modules routes below
appRoutes.use(authRouter);

export default appRoutes;
