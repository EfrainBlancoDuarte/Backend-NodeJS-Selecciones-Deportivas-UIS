const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Seleccion extends Model {}

Seleccion.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    deporte: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Seleccion',
    tableName: 'Seleccion',
    timestamps: false,
  }
);

module.exports = Seleccion;
