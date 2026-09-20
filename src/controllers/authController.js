const userService = require('../services/userService');

function validarCredenciales(req, res, next) {
  const { email, password } = req.body;

  // Validación básica de los datos recibidos por el servicio web.
  if (!email || !password) {
    return res.status(400).json({
      ok: false,
      message: 'El correo y la contraseña son obligatorios.'
    });
  }

  next();
}

async function register(req, res) {
  try {
    const result = await userService.register(req.body.email, req.body.password);
    return res.status(result.status).json({ ok: result.ok, message: result.message });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: 'Error interno del servicio.' });
  }
}

async function login(req, res) {
  try {
    const result = await userService.login(req.body.email, req.body.password);
    return res.status(result.status).json({ ok: result.ok, message: result.message });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: 'Error interno del servicio.' });
  }
}

module.exports = { validarCredenciales, register, login };
