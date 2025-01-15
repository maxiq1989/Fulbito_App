const express = require('express');
const router = express.Router();

let players = []; // Lista temporal de jugadores

// Registrar jugador
router.post('/', (req, res) => {
    const { name, lastName, age, nickname, skillLevel } = req.body;
    const player = { id: players.length + 1, name, lastName, age, nickname, skillLevel };
    players.push(player);
    res.status(201).json({ message: 'Jugador registrado exitosamente', player });
});

// Listar jugadores
router.get('/', (req, res) => {
    res.json(players);
});

module.exports = router;
