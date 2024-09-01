import { envs } from './config';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(async () => {
  await main();
})();

async function main() {
  // await base de datos

  // inicio del server
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
  
}