import { Router } from 'express';

export class AuthRoutes {

  // DI
  constructor() {}

  static get routes(): Router {

    const router = Router();

    // Definir rutas de auth
    router.post('/login', (req, res) => {
      res.json('Login');
    });

    router.post('/register', (req, res) => {
      res.json('register');
    });

    return router;
  }

}