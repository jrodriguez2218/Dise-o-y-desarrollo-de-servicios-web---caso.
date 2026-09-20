const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

// Archivo sencillo para persistir los usuarios durante la evidencia.
const DATA_FILE = path.join(__dirname, '../../data/usuarios.json');

function ensureDataFile() {
  const folder = path.dirname(DATA_FILE);
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

function readUsers() {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeUsers(users) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2), 'utf8');
}

async function register(email, password) {
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();

  if (users.some(user => user.email === normalizedEmail)) {
    return { ok: false, status: 409, message: 'El usuario ya está registrado.' };
  }

  // Nunca se guarda la contraseña en texto plano.
  const passwordHash = await bcrypt.hash(password, 10);
  users.push({ id: Date.now(), email: normalizedEmail, passwordHash });
  writeUsers(users);

  return { ok: true, status: 201, message: 'Usuario registrado correctamente.' };
}

async function login(email, password) {
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const user = users.find(item => item.email === normalizedEmail);

  // Se usa el mismo mensaje para usuario inexistente o contraseña incorrecta.
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return { ok: false, status: 401, message: 'Error en la autenticación.' };
  }

  return { ok: true, status: 200, message: 'Autenticación satisfactoria.' };
}

module.exports = { register, login };
