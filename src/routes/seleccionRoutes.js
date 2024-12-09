const express = require('express');
const SeleccionController = require('../controllers/SeleccionController');

const router = express.Router();

// Rutas de Selección
router.get('/listar', SeleccionController.obtenerSelecciones);
router.get('/:id', SeleccionController.obtenerSeleccion);
router.post('/crear', SeleccionController.crearSeleccion);

module.exports = router;
