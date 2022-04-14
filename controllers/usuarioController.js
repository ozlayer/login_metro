const Usuario = require("../model/Usuario");

//Para mostrar
module.exports.mostrar = (req, res) => {
  Usuario.find({}, (error, usuarios) => {
    if (error) {
      return res.status(500).json({
        message: "Error mostrando los usuarios",
      });
    }
    console.log(usuarios); //--> Esto es par amostrar por consola lo que se hace.
    return res.render("index", { usuarios: usuarios });
  });
};
