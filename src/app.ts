import { Server } from './presentation/server';

(async () => {
  await main();
})();

async function main() {
  // await base de datos

  // inicio del server
  new Server({
    port: 3000
  }).start();
}