const mongoose = require("mongoose");
const ClassicSchema = new mongoose.Schema({
  plate: {
    type: String,
    required: [true, "Un clásico debe tener matrícula"],
    unique: true,
    trim: true,
    minlength: 6,
  },
  model: {
    type: String,
    required: [true, "Un clasico debe tener modelo"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Un clásico debe tener año"],
    trim: true,
  },
  condition: {
    type: String,
    required: [true, "Un clásico debe tener estado"],
    trim: true,
  },
});
const Classic = mongoose.model("Classic", ClassicSchema);
module.exports = Classic;
