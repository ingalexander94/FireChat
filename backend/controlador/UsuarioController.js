const UsuarioController = {};
const Conexion = require('../Conexion');
const crypto = require('crypto');

UsuarioController.crearUsuario = async (req, res) => {
    const { usuario, clave, genero } = req.body;
    const Usuario = {
        usuario,
        clave,
        genero,
        hash: crypto.randomBytes(16).toString('hex')
    }

    var existe = await Conexion.query("SELECT * FROM usuario WHERE usuario = ?", [Usuario.usuario]);

    if (existe.length === 0) {
        await Conexion.query("INSERT INTO usuario SET ?", [Usuario], (err, results, fields) => {
            if (!err) {
                Usuario.error = false;
                res.json([Usuario]);
            } else {
                console.log("ocurrio un error", err);
            }
        });
    } else {
        var correcto = await Conexion.query("SELECT * FROM usuario WHERE usuario = ? AND clave = ?", [Usuario.usuario, Usuario.clave]);
        if (correcto.length > 0) {
            existe[0].error = false;
        } else {
            existe = [];
            existe[0] = {error:true};
        }
        res.json(existe);
    }



}

module.exports = UsuarioController;


