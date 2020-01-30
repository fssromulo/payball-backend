const express = require('express');
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

routes.get('/player', PlayerController.getPlayers);

module.exports = routes;