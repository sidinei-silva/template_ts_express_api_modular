import * as Yup from 'yup';

export default interface UserValidation {
  firstName: Yup.StringSchema<string>;
  lastName: Yup.StringSchema<string>;
  email: Yup.StringSchema<string>;
  password: Yup.StringSchema<string>;
}
