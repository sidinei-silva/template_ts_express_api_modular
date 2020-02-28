import { Router } from 'express';

import UserController from './app/users/users.controller';

const controllers = [new UserController()];

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Routes' });
});

export default routes;
