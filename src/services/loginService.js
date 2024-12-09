const Login = require('../models/Login');
const Persona = require('../models/Persona');

const LoginService = {
  async crearCuenta(loginDTO) {
    const { idPersona, password } = loginDTO;

    if (!idPersona) throw new Error('El id de la persona no puede estar vacío');
    if (!password || password.trim() === '') throw new Error('La contraseña no puede estar vacía');

    const loginExistente = await Login.findByPk(idPersona);
    if (loginExistente) throw new Error('La persona ya tiene una cuenta asociada');

    const persona = await Persona.findByPk(idPersona);
    if (!persona) throw new Error(`La persona con id ${idPersona} no existe.`);

    const nuevoLogin = await Login.create({
      idPersona,
      password,
    });

    return nuevoLogin;
  },

  async validarCredenciales(loginDTO) {
    const { idPersona, password } = loginDTO;

    const login = await Login.findByPk(idPersona);
    if (!login || login.password !== password) {
      throw new Error('Usuario o contraseña incorrecta');
    }

    return login;
  },
};

module.exports = LoginService;
