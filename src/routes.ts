import { Router } from 'express';

import AppModule from './app/app.module';

const routes = Router();

AppModule.subscribeRoutes(routes);

export default routes;
