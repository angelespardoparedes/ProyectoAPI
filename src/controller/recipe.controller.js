const Recipe = require("../models/recipe.model");

// Controlador para obtener todas las recetas
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controlador para obtener una receta por su ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: "Receta no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controlador para crear una nueva receta
exports.createRecipe = async (req, res) => {
  const recipe = new Recipe({
    isrc: req.body.isrc,
    categoria: req.body.categoria,
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controlador para actualizar una receta existente
exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      recipe.isrc = req.body.isrc || recipe.isrc;
      recipe.categoria = req.body.categoria || recipe.categoria;
      recipe.name = req.body.name || recipe.name;
      recipe.ingredients = req.body.ingredients || recipe.ingredients;
      recipe.instructions = req.body.instructions || recipe.instructions;

      const updatedRecipe = await recipe.save();
      res.json(updatedRecipe);
    } else {
      res.status(404).json({ message: "Receta no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controlador para eliminar una receta existente
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      await recipe.remove();
      res.json({ message: "Receta eliminada" });
    } else {
      res.status(404).json({ message: "Receta no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
