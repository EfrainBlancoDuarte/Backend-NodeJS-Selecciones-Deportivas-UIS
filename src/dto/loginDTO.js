const Joi = require('joi');

const LoginDTO = Joi.object({
  idPersona: Joi.number().required(),
  password: Joi.string().min(6).required(),
});

module.exports = LoginDTO;
