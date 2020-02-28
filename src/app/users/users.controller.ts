import { Request, Response, Router } from 'express';

class UserController {
  private path: string;

  constructor() {
    this.path = '/users';
  }

  public initRoutes = (router: Router): void => {
    router.get(this.path, this.index);
  };

  private index = async (req: Request, res: Response): Promise<Response> => {
    const user = 'Sidinei';
    return res.json(user);
  };
}

export default UserController;
