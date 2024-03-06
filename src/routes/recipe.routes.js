const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const multer = require("multer");

// Configuración de multer para almacenar imágenes
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para obtener todas las recetas
router.get("/", recipeController.getAllRecipes);

// Ruta para obtener una receta por su ID
router.get("/:id", recipeController.getRecipeById);

// Ruta para crear una nueva receta con imagen
router.post("/", upload.single("image"), recipeController.createRecipe);

// Ruta para actualizar una receta existente
router.put("/:id", upload.single("image"), recipeController.updateRecipe);

// Ruta para eliminar una receta existente
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
