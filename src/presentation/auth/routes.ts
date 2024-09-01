import { Router } from 'express';
import { AuthController } from './controller';

export class AuthRoutes {

  // DI
  constructor() {}

  static get routes(): Router {

    const router = Router();
    const controller = new AuthController();

    // Definir rutas de auth
    router.post('/register', controller.registerUser);
    router.post('/login', controller.loginUser);

    return router;
  }

}