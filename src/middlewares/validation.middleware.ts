import { RequestHandler } from 'express';
import * as Yup from 'yup';

export default function validateSchema(
  schema: Yup.ObjectSchema,
): RequestHandler {
  return (req, res, next) =>
    schema
      .validate(req.body, { abortEarly: false })
      .then(() => next())
      .catch(err =>
        res.status(400).json({ error: 'Validation fails', errors: err.errors }),
      );
}
