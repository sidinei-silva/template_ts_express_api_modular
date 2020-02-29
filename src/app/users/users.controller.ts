import { Request, Response, Router } from 'express';
import validateSchema from '../../middlewares/validation.middleware';
import UserValidator from './users.validators';
import UserService from './users.service';

class UserController {
  private path: string;

  private userService: UserService;
  
  private userValidator: UserValidator;

  constructor() {
    this.path = '/users';
    this.userService = new UserService();
    this.userValidator = new UserValidator();
  }

  public initRoutes = (router: Router): void => {
    router.get(this.path, this.index);
    router.post(
      this.path,
      validateSchema(this.userValidator.storeValidation),
      this.store,
    );
    router.post(
      `${this.path}/signin`,
      validateSchema(this.userValidator.login),
      this.exampleLogin,
    );
  };

  private index = async (req: Request, res: Response): Promise<Response> => {
    const user = 'Sidinei';
    return res.json({ user });
  };

  private store = async (req: Request, res: Response): Promise<Response> => {
    const user = this.userService.signup(req.body);
    return res.json(user);
  };

  private exampleLogin = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    return res.json(req.body);
  };
}

export default UserController;
