import { Router } from 'express';

import UserModule from './app/users/user.module';

const modules = [UserModule];

const routes = Router();

modules.map(m => m.subscribeRoutes(routes));

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Routes' });
});

export default routes;
