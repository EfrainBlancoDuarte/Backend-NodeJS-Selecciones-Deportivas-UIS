const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Rol = require('./Rol');

class Persona extends Model {}

Persona.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idRol: {
      type: DataTypes.INTEGER,
      field: 'id_rol',
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correoInstitucional: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'correo_institucional',
    },
    fechaDeNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'fecha_de_nacimiento',
    },
    peso: {
      type: DataTypes.STRING,
    },
    altura: {
      type: DataTypes.STRING,
    },
    posicion: {
      type: DataTypes.STRING,
    },
    dorsal: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Persona',
    tableName: 'Persona',
    timestamps: false,
  }
);

Persona.belongsTo(Rol, { foreignKey: 'idRol' });
Rol.hasMany(Persona, { foreignKey: 'idRol' });

module.exports = Persona;
