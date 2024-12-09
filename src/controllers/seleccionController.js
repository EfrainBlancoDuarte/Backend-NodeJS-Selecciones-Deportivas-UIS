const SeleccionService = require('../services/seleccionService');

const SeleccionController = {
  async obtenerSelecciones(req, res) {
    try {
      const selecciones = await SeleccionService.obtenerSelecciones();
      res.status(200).json(selecciones); // 200: OK
    } catch (error) {
      res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
    }
  },

  async obtenerSeleccion(req, res) {
    try {
      const { id } = req.params;
      const seleccion = await SeleccionService.obtenerSeleccion(id);
      res.status(200).json(seleccion); // 200: OK
    } catch (error) {
      if (error.message.includes('No se encontró')) {
        res.status(404).send(error.message); // 404: Not Found
      } else {
        res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
      }
    }
  },

  async crearSeleccion(req, res) {
    try {
      const seleccionDTO = req.body;
      await SeleccionService.crearSeleccion(seleccionDTO);
      res.status(201).send('Selección creada exitosamente'); // 201: Created
    } catch (error) {
      res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
    }
  },
};

module.exports = SeleccionController;
