import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { AdminModule } from './admin/admin.module';
import { ApiModule } from './api/api.module';

async function bootstrap() {
  const server = express();
  const adapter = new ExpressAdapter(server);
  const adminApp = await NestFactory.create(AdminModule, adapter);
  const apiApp = await NestFactory.create(ApiModule, adapter);

  adminApp.setGlobalPrefix('admin');
  apiApp.setGlobalPrefix('api');

  await adminApp.init();
  await apiApp.init();
  console.log(server.mountpath);
  const registeredPaths = server._router.stack.filter(layer => layer.route).map(layer => ({regexp: layer.regexp, route: layer.route}));
  console.log(registeredPaths);
  registeredPaths.forEach(path => console.log(path.route));

  server.listen(3000, () => console.log('Listening at 3000'));
}
bootstrap();
