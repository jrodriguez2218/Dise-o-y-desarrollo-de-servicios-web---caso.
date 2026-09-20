const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Permite recibir solicitudes con información en formato JSON.
app.use(express.json());

// Ruta general de comprobación del servicio.
app.get('/', (req, res) => {
  res.json({
    servicio: 'Servicio Web de Autenticación',
    evidencia: 'GA7-220501096-AA5-EV01',
    estado: 'Activo'
  });
});

// Agrupa los servicios relacionados con autenticación.
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servicio ejecutándose en http://localhost:${PORT}`);
});
