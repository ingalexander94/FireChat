const express = require('express');
const router = express.Router();

const UsuarioController = require('../controlador/UsuarioController');

router.post('/crear',UsuarioController.crearUsuario);

module.exports = router;