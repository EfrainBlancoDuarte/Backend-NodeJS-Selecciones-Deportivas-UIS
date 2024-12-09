const LoginService = require('../services/loginService');

const LoginController = {
  async crearCuenta(req, res) {
    try {
      const loginDTO = req.body;
      await LoginService.crearCuenta(loginDTO);
      res.status(201).send('Cuenta creada exitosamente'); // 201: Created
    } catch (error) {
      if (error.message.includes('ya tiene una cuenta asociada')) {
        res.status(409).send(error.message); // 409: Conflict
      } else if (error.message.includes('no puede estar vacío')) {
        res.status(400).send(error.message); // 400: Bad Request
      } else {
        res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
      }
    }
  },

  async validarLogin(req, res) {
    try {
      const loginDTO = req.body;
      const login = await LoginService.validarCredenciales(loginDTO);
      res.status(200).json(login); // 200: OK
    } catch (error) {
      if (error.message.includes('Usuario o contraseña incorrecta')) {
        res.status(401).send(error.message); // 401: Unauthorized
      } else {
        res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
      }
    }
  },
};

module.exports = LoginController;
