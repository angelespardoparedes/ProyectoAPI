const express = require("express");
const connectMongo = require("./utils/mongoConnection"); // Importamos la función de conexión a la base de datos
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Conexión a la base de datos MongoDB
connectMongo();

// Rutas de la API
app.use("/recipes", recipeRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
