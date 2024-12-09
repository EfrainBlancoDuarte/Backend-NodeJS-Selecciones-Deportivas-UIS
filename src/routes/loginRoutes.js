const express = require('express');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.post('/crear', LoginController.crearCuenta);
router.post('/validar', LoginController.validarLogin);

module.exports = router;
