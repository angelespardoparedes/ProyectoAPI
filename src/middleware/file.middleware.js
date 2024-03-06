const multer = require("multer");
const Recipe = require("../models/recipeModel");

// Configuración de multer para almacenar imágenes
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Controlador para crear una nueva receta con imagen
(exports.createRecipe = upload.single("image")),
  async (req, res) => {
    const recipe = new Recipe({
      isrc: req.body.isrc,
      categoria: req.body.categoria,
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    try {
      const newRecipe = await recipe.save();
      res.status(201).json(newRecipe);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
