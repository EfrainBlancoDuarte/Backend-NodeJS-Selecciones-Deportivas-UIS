const Persona = require('../models/Persona');
const Rol = require('../models/Rol');

const PersonaService = {
  async obtenerPersona(id) {
    const persona = await Persona.findByPk(id, { include: [Rol] });
    if (!persona) throw new Error(`No se encontró la persona con ID ${id}`);
    return persona;
  },

  async crearPersona(personaDTO) {
    try {
      // Extraer el idRol del DTO y los datos restantes
      const { idRol, ...data } = personaDTO;
  
      // Verificar que el rol existe
      const rol = await Rol.findByPk(idRol);
      if (!rol) throw new Error(`El rol con id ${idRol} no existe.`);
  
      // Crear la nueva persona
      const nuevaPersona = await Persona.create({ ...data, idRol });
  
      return nuevaPersona.id;
    } catch (error) {
      // Manejo detallado de errores
      console.error('Error al crear persona:', error.message);
      throw new Error('Error al crear la persona: ' + error.message);
    }
  },

  async editarPersona(id, personaDTO) {
    const persona = await Persona.findByPk(id);
    if (!persona) throw new Error(`No se encontró la persona con ID ${id}`);

    await persona.update(personaDTO);
    return persona;
  },

  async eliminarPersona(id) {
    const persona = await Persona.findByPk(id);
    if (!persona) return false;

    await persona.destroy();
    return true;
  },
};

module.exports = PersonaService;
