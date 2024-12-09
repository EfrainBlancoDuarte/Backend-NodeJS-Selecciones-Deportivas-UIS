const Joi = require('joi');

const PersonaDTO = Joi.object({
  nombre: Joi.string().required(),
  apellidos: Joi.string().required(),
  correoInstitucional: Joi.string().email().required(),
  fechaDeNacimiento: Joi.date().required(),
  peso: Joi.string().optional(),
  altura: Joi.string().optional(),
  posicion: Joi.string().optional(),
  dorsal: Joi.string().optional(),
  idRol: Joi.number().required(),
});

module.exports = PersonaDTO;
