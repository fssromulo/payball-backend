const Player = require('./../models/PlayerModel');

const PlayerController = {
   async getPlayers(req, res) {
      try {

         const playerList = await Player.findAll();
         return res.json(playerList);

      } catch (error) {
         console.log('Error ...', error);
      }
   }
}

module.exports = PlayerController;