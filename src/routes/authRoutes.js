const express = require('express');
const controller = require('../controllers/authController');

const router = express.Router();

// Endpoint para registrar un nuevo usuario.
router.post('/register', controller.validarCredenciales, controller.register);

// Endpoint para validar usuario y contraseña.
router.post('/login', controller.validarCredenciales, controller.login);

module.exports = router;
