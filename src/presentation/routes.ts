import { Router } from 'express';
import { AuthRoutes } from './auth/routes';

export class AppRoutes {

  // DI
  constructor() {}

  static get routes(): Router {

    const router = Router();

    // Definir todas mi rutas principales
    router.use('/api/auth', AuthRoutes.routes);

    return router;
  }

}