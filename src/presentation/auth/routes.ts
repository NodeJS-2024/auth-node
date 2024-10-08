import { Router } from 'express';
import { AuthController } from './controller';
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class AuthRoutes {

  // DI
  constructor() {}

  static get routes(): Router {

    const router = Router();

    const authDatasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(authDatasource);
    
    const controller = new AuthController(authRepository);

    // Definir rutas de auth
    router.post('/register', controller.registerUser);
    router.post('/login', controller.loginUser);

    router.get('/', [AuthMiddleware.validateJWT], controller.getUsers);

    return router;
  }

}