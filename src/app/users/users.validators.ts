import * as Yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import UserValidation from './interfaces/UserValidation';

class UserValidator {
  private userValidation: UserValidation;

  constructor() {
    this.userValidation = {
      firstName: Yup.string(),
      lastName: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
    };
  }

  public storeValidation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction | void> => {
    const { firstName, lastName, email, password } = this.userValidation;

    const schema = Yup.object().shape({
      firstName: firstName.required(),
      lastName: lastName.required(),
      email: email.required(),
      password: password.required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'Validation fails', errors: err.errors });
    }
    return next();
  };
}

export default UserValidator;
