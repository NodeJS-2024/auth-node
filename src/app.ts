import { envs } from './config';
import { Server } from './presentation/server';

(async () => {
  await main();
})();

async function main() {
  // await base de datos

  // inicio del server
  new Server({
    port: envs.PORT,
  }).start();
}