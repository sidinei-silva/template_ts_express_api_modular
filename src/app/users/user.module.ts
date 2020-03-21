import { Router } from 'express';
import UserController from './users.controller';

class UserModule {
  public controllers = [new UserController()];

  public imports = [];

  public export = [];

  public static subscribeRoutes = (routes: Router): void => {
    const module = new UserModule();
    module.controllers.map(c => c.initRoutes(routes));
  };
}

export default UserModule;
