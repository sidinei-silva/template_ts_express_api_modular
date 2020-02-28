import { Request, Response, Router } from 'express';
import UserValidator from './users.validators';

class UserController {
  private path: string;

  private userValidator: UserValidator;

  constructor() {
    this.path = '/users';
    this.userValidator = new UserValidator();
  }

  public initRoutes = (router: Router): void => {
    router.get(this.path, this.index);
    router.post(this.path, this.userValidator.storeValidation, this.store);
  };

  private index = async (req: Request, res: Response): Promise<Response> => {
    const user = 'Sidinei';
    return res.json(user);
  };

  private store = async (req: Request, res: Response): Promise<Response> => {
    const user = 'Sidinei';
    return res.json(user);
  };
}

export default UserController;
