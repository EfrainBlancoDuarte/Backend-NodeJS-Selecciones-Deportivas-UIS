const PersonaService = require('../services/personaService');

const PersonaController = {
  async crearPersona(req, res) {
    try {
      const personaDTO = req.body;
      const idPersona = await PersonaService.crearPersona(personaDTO);
      res.status(201).json({ idPersona }); // 201: Created
    } catch (error) {
      res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
    }
  },

  async obtenerPersona(req, res) {
    try {
      const { id } = req.params;
      const persona = await PersonaService.obtenerPersona(id);
      res.status(200).json(persona); // 200: OK
    } catch (error) {
      if (error.message.includes('No se encontró')) {
        res.status(404).send(error.message); // 404: Not Found
      } else {
        res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
      }
    }
  },

  async editarPersona(req, res) {
    try {
      const { id } = req.params;
      const personaDTO = req.body;
      await PersonaService.editarPersona(id, personaDTO);
      res.status(200).send('Persona actualizada exitosamente'); // 200: OK
    } catch (error) {
      if (error.message.includes('No se encontró')) {
        res.status(404).send(error.message); // 404: Not Found
      } else {
        res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
      }
    }
  },

  async eliminarPersona(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await PersonaService.eliminarPersona(id);
      if (eliminado) {
        res.status(200).send('Persona eliminada exitosamente'); // 200: OK
      } else {
        res.status(404).send('Persona no encontrada'); // 404: Not Found
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor'); // 500: Internal Server Error
    }
  },
};

module.exports = PersonaController;
