const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Rol extends Model {}

Rol.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Rol',
    tableName: 'Rol',
    timestamps: false,
  }
);


module.exports = Rol;
