const Seleccion = require('../models/seleccion');

const SeleccionService = {
  async obtenerSelecciones() {
    return await Seleccion.findAll();
  },

  async obtenerSeleccion(id) {
    const seleccion = await Seleccion.findByPk(id);
    if (!seleccion) throw new Error(`No se encontró la selección con ID ${id}`);
    return seleccion;
  },

  async crearSeleccion(seleccionDTO) {
    const { deporte } = seleccionDTO;
    const nuevaSeleccion = await Seleccion.create({ deporte });
    return nuevaSeleccion;
  },
};

module.exports = SeleccionService;
