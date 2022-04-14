const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ususarioSchema = new Schema(
  {
    nombre: String,
    edad: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("usuarios", ususarioSchema);
