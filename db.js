const mongoose = require("mongoose");
const url = "mongodb://localhost/db_usuarios";

const URI = process.env.MONGODB_URL;

mongoose.connect(
  url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err;
    console.log("!!!Connected to MongoDB!!!");
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al conectar MongoDB"));
db.once("open", function callback() {
  console.log("¡Conectado a MongoDB!");
});

module.exports = db;
