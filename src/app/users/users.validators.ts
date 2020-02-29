import * as Yup from 'yup';

class UserValidator {
  private firstName = Yup.string();

  private lastName = Yup.string();

  private email = Yup.string().email();

  private password = Yup.string().min(6);
  
  get storeValidation() {
    return Yup.object().shape({
      firstName: this.firstName.required(),
      lastName: this.lastName.required(),
      email: this.email.required(),
      password: this.password.required(),
    });
  }

  get login() {
    return Yup.object().shape({
      email: this.email.required(),
      password: this.password.required(),
    });
  }
}

export default new UserValidator();
