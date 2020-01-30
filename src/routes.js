const express = require('express');
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');
const PositionController = require('./controllers/PositionController');
const MatchController = require('./controllers/MatchController');
const MatchPlayerController = require('./controllers/MatchPlayerController');

// Positions
routes.get('/position', PositionController.getPositions);
routes.get('/position/:id_position', PositionController.getPositionById);
routes.post('/position', PositionController.savePosition);
routes.put('/position/:id_position', PositionController.updatePosition);
routes.delete('/position/:id_position', PositionController.removePosition);

// Players
routes.get('/player', PlayerController.getPlayers);
routes.get('/player/:id_player', PlayerController.getPlayerById);
routes.post('/player', PlayerController.savePlayer);
routes.put('/player/:id_player', PlayerController.updatePlayer);
routes.delete('/player/:id_player', PlayerController.removePlayer);

// Matchs
routes.get('/match', MatchController.getMatchs);
routes.get('/match/:id_match', MatchController.getMatchById);
routes.post('/match', MatchController.saveMatch);
routes.put('/match/:id_match', MatchController.updateMatch);
routes.delete('/match/:id_match', MatchController.removeMatch);

// Matchs
routes.get('/match-player/:id_match', MatchPlayerController.getMatchsPlayers);
routes.post('/match-player', MatchPlayerController.saveMatchPlayer);
routes.delete('/match-player', MatchPlayerController.removeMatchPlayer);

module.exports = routes;