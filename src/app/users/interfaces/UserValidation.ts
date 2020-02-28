import * as Yup from 'yup';

export default class UserValidation {
  protected firstName = Yup.string();

  protected lastName = Yup.string();

  protected email = Yup.string().email();

  protected password = Yup.string().min(6);
}
