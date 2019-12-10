import Joi from '@hapi/joi';

const phoneRegex = /^(\+?234[789][01]\d{8})$|^(0[789][01]\d{8})$/;

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
    password: Joi.string()
    .min(8)
    .max(255)
    .trim()
    .required()
    .label('Password does not meet requirements'),
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

const openAccountSchema = Joi.object({
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
    gender: Joi
    .string()
    .min(3)
    .max(10)
    .trim()
    .lowercase()
    .required(),
    nationality: Joi
    .string()
    .min(3)
    .max(20)
    .trim()
    .lowercase()
    .required(),
    maritaStatus: Joi
    .string()
    .min(3)
    .max(20)
    .trim()
    .lowercase()
    .required(),
    religion: Joi
    .string()
    .min(3)
    .max(20)
    .trim()
    .lowercase(),
    dateOfBirth: Joi
    .string()
    .min(3)
    .max(40)
    .trim()
    .lowercase()
    .required(),
    employmentStatus: Joi
    .string()
    .min(3)
    .max(10)
    .trim()
    .lowercase(),
    phoneNumber: Joi
    .string()
    .min(3)
    .max(40)
    .trim()
    .lowercase()
    .pattern(phoneRegex)
    .required(),
    password: Joi.string()
    .min(8)
    .max(255)
    .trim()
    .required()
    .label('Password does not meet requirements'),
}) 

export {createAdminSchema, loginAdminSchema}