import { envs } from './config';
import { MongoDatabase } from './data/mongodb';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(async () => {
  await main();
})();

async function main() {
  
  // Conexion a base de datos
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  // inicio del server
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
  
}