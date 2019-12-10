import Joi from '@hapi/joi';

const creatAdminSchema = Joi.object({
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

export {creatAdminSchema}