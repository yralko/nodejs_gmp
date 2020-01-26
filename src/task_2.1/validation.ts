import * as Joi from '@hapi/joi';

const basicSchema = {
  login: Joi.string()
    .pattern(/[^A-Za-z0-9]+/)
    .required(),
  password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{1,}$/)
    .required(),
  age: Joi.number()
    .min(4)
    .max(130)
    .required(),
};
 
export const userCreateValidationSchema = Joi.object(basicSchema);
export const userUpdateValidationSchema = Joi.object({
  ...basicSchema,
  id: Joi.string().required(),
});
