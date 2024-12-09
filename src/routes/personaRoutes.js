const express = require('express');
const PersonaController = require('../controllers/PersonaController');

const router = express.Router();

// Rutas de Persona
router.post('/crear', PersonaController.crearPersona);
router.get('/:id', PersonaController.obtenerPersona);
router.put('/:id', PersonaController.editarPersona);
router.delete('/:id', PersonaController.eliminarPersona);

module.exports = router;
