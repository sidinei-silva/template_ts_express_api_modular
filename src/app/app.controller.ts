import { Request, Response, Router } from 'express';

class AppController {
  private path: string;

  constructor() {
    this.path = '/';
  }

  public initRoutes = (router: Router): void => {
    router.get(this.path, this.index);
  };

  private index = async (req: Request, res: Response): Promise<Response> => {
    return res.json({ message: 'Hello World' });
  };
}

export default AppController;
