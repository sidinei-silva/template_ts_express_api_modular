import { Router } from 'express';
import AppController from './app.controller';
import UserModule from './users/user.module';

class AppModule {
  public controllers = [new AppController()];

  public imports = [UserModule];

  public export = [];

  public static subscribeRoutes = (routes: Router): void => {
    const module = new AppModule();
    module.controllers.map(c => c.initRoutes(routes));
    module.imports.map(m => m.subscribeRoutes(routes));
  };
}

export default AppModule;
