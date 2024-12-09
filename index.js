// Importar dependencias
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const express = require('express');
const cors = require('cors'); // Middleware para CORS
const sequelize = require('./src/db'); // Conexión a la base de datos
const Login = require('./src/models/Login'); // Importa todos los modelos que hayas creado
const Persona = require('./src/models/Persona');
const Plantel = require('./src/models/Plantel');
const Rol = require('./src/models/Rol');
const Seleccion = require('./src/models/Seleccion');

// Importar rutas
const LoginRoutes = require('./src/routes/loginRoutes');
const PersonaRoutes = require('./src/routes/personaRoutes');
const PlantelRoutes = require('./src/routes/plantelRoutes');
const SeleccionRoutes = require('./src/routes/seleccionRoutes');

// Crear la aplicación de Express
const app = express();

// Middleware
app.use(cors()); // Permite solicitudes desde cualquier origen
app.use(express.json()); // Permite leer JSON en el cuerpo de las solicitudes

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de migración de Java a Node.js!');
});

// Montar las rutas principales
app.use('/api/login', LoginRoutes);
app.use('/api/persona', PersonaRoutes);
app.use('/api/plantel', PlantelRoutes);
app.use('/api/seleccion', SeleccionRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000; // Usa el puerto definido en .env o el 3000 por defecto
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
