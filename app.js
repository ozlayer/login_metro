const express = require("express");
const app = express();

const db = require("./db");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const usuarios = require("./routes/usuarios");
app.use(usuarios);

app.get("/", (req, res) => {
  res.send("HOLA AMIGOS");
});

app.listen(3000, () => {
  console.log("¡Server UP! en http://localhost:3000");
});
