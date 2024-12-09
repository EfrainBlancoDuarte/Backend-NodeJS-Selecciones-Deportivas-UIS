const { Sequelize } = require('sequelize');

// Crear la instancia de Sequelize con las variables de entorno
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT || 'mysql', // Dialecto predeterminado
  logging: process.env.DB_LOGGING === 'true', // Mostrar consultas SQL si DB_LOGGING es true
  pool: {
    max: 5, // Máximo de conexiones en el pool
    min: 0, // Mínimo de conexiones en el pool
    acquire: 30000, // Tiempo máximo para adquirir conexión (ms)
    idle: 10000, // Tiempo máximo de inactividad antes de liberar conexión (ms)
  },
});

// Probar la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });

module.exports = sequelize;
