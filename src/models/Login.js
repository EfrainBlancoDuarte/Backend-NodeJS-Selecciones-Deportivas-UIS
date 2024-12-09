const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Persona = require('./Persona');

class Login extends Model {}

Login.init(
  {
    idPersona: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'id_persona',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Login',
    tableName: 'Login',
    timestamps: false,
  }
);

// Relaciones
Login.belongsTo(Persona, { foreignKey: 'idPersona' });
Persona.hasOne(Login, { foreignKey: 'idPersona' });

module.exports = Login;
