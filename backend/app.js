const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
const playersRoutes = require('./routes/players');
const teamsRoutes = require('./routes/teams');

app.use('/players', playersRoutes);
app.use('/teams', teamsRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
