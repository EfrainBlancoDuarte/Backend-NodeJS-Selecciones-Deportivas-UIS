const express = require('express');
const PlantelController = require('../controllers/PlantelController');

const router = express.Router();

// Rutas de Plantel
router.post('/crear', PlantelController.crearPlantel);
router.get('/listarPorSeleccion/:idSeleccion', PlantelController.listarPlantelPorSeleccion);

module.exports = router;
