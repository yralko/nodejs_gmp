import * as Joi from '@hapi/joi';

const basicUserSchema = {
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

const basicGroupSchema = {
  name: Joi.string().required(),
  permissions: Joi.array().items(Joi.string().regex(/^(READ|WRITE|DELETE|SHARE|UPLOAD_FILES)$/)).required(),
}

const getValidationSchema = (schema) => ({
  create: Joi.object(schema),
  update: Joi.object({
    ...schema,
    id: Joi.string().required(),
  })
})

export default {
  user: getValidationSchema(basicUserSchema),
  group: getValidationSchema(basicGroupSchema),
}



