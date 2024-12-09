const PlantelService = require('../services/plantelService');

const PlantelController = {
  async crearPlantel(req, res) {
    try {
      const plantelDTO = req.body;
      await PlantelService.asociarPersonaASeleccion(plantelDTO);
      res.status(201).send('Plantel creado exitosamente'); // 201: Created
    } catch (error) {
      res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
    }
  },

  async listarPlantelPorSeleccion(req, res) {
    try {
      const { idSeleccion } = req.params;
      const planteles = await PlantelService.obtenerPlantelPorSeleccion(idSeleccion);
      if (planteles.length === 0) {
        res.status(204).send(); // 204: No Content
      } else {
        res.status(200).json(planteles); // 200: OK
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
    }
  },
};

module.exports = PlantelController;
