const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  isrc: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  categoria: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: [String],
    required: true,
    trim: true,
  },
  instructions: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
