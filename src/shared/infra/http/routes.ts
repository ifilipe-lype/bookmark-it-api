import { Router } from 'express';
import authRouter from '@modules/auth/infra/http/routes';

const appRoutes = Router();

appRoutes.use(authRouter);

export default appRoutes;
