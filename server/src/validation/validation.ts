import Joi from '@hapi/joi';

const createAdminSchema = Joi.object({
    firstname: Joi
    .string()
    .min(3)
    .max(40)
    .trim()
    .lowercase()
    .required(),
lastname: Joi
    .string()
    .min(3)
    .max(40)
    .trim()
    .lowercase()
    .required(),
  email: Joi
    .string()
    .trim()
    .email(),
  username: Joi
    .string()
    .alphanum()
    .min(4)
    .max(40)
    .lowercase()
    .trim()
    .required(), 
})

const loginAdminSchema = Joi.object({
  username: Joi
    .string()
    .alphanum()
    .min(4)
    .max(40)
    .lowercase()
    .trim()
    .required(), 
password: Joi.string()
    .min(8)
    .max(255)
    .trim()
    .required()
    .label('Password does not meet requirements'),
});

export {createAdminSchema, loginAdminSchema}