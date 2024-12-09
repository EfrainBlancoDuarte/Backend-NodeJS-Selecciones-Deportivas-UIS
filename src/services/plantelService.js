const Plantel = require('../models/plantel');
const Persona = require('../models/persona');
const Seleccion = require('../models/seleccion');

const PlantelService = {
  async asociarPersonaASeleccion(plantelDTO) {
    const { idPersona, idSeleccion } = plantelDTO;

    const persona = await Persona.findByPk(idPersona);
    if (!persona) throw new Error(`No se encontró la persona con ID ${idPersona}`);

    const seleccion = await Seleccion.findByPk(idSeleccion);
    if (!seleccion) throw new Error(`No se encontró la selección con ID ${idSeleccion}`);

    const nuevoPlantel = await Plantel.create({ idPersona, idSeleccion });
    return nuevoPlantel;
  },

  async obtenerPlantelPorSeleccion(idSeleccion) {
    const planteles = await Plantel.findAll({ where: { idSeleccion }, include: [Persona, Seleccion] });
    return planteles.map((plantel) => ({
      idPersona: plantel.Persona.id,
      idSeleccion: plantel.Seleccion.id,
    }));
  },
};

module.exports = PlantelService;
