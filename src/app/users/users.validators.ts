import * as Yup from 'yup';
import UserValidation from './interfaces/UserValidation';

class UserValidator extends UserValidation {
  get storeValidation() {
    return Yup.object().shape({
      firstName: this.firstName.required(),
      lastName: this.lastName.required(),
      email: this.email.required(),
      password: this.password.required(),
    });
  }
}

export default new UserValidator();
