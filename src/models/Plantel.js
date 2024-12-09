const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Persona = require('./Persona');
const Seleccion = require('./Seleccion');

class Plantel extends Model {}

Plantel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idPersona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_persona',
    },
    idSeleccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_seleccion',
    },
  },
  {
    sequelize,
    modelName: 'Plantel',
    tableName: 'Plantel',
    timestamps: false,
  }
);

// Relaciones
Plantel.belongsTo(Persona, { foreignKey: 'idPersona' });
Persona.hasMany(Plantel, { foreignKey: 'idPersona' });

Plantel.belongsTo(Seleccion, { foreignKey: 'idSeleccion' });
Seleccion.hasMany(Plantel, { foreignKey: 'idSeleccion' });

module.exports = Plantel;
