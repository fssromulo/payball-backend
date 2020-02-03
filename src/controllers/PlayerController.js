const Player = require('./../models/PlayerModel');

const PositionModel = require('./../models/PositionModel');

const PlayerController = {
   async getPlayers(req, res) {
      try {

         const playerList = await Player.findAll({
            attributes: [
               'id',
               'name',
               'skills',
               'id_position'

            ],
            hierarchy: true,
            include: [
               {
                  model: PositionModel,
                  // as: 'positions', // Alias MySQL p/ tabela
                  required: true,
                  attributes: {
                     exclude: ['id']
                  },
               },
            ]
         });
         return res.json(playerList);

      } catch (error) {
         console.log('Error ...', error);
      }
   },
   async getPlayerById(req, res) {
      try {
         const { id_player } = req.params;

         const player = await Player.findByPk(id_player);

         res.json(player);
      } catch (error) {
         console.log('Error BY ID ...', error);
      }
   },
   async savePlayer(req, res) {
      try {
         const {
            name,
            skills,
            id_position
         } = req.body;

         const player = await Player.create({
            name,
            skills,
            id_position
         });

         res.json(player);
      } catch (error) {
         console.log('Error SAVE ...', error);
      }
   },
   async updatePlayer(req, res) {
      try {
         const {
            name,
            skills,
            id_position
         } = req.body;

         const { id_player } = req.params;

         const playerUpdated = await Player.update({
            name,
            skills,
            id_position
         }, {
            where: {
               id: id_player
            }
         });

         res.json(playerUpdated);

      } catch (error) {
         console.log('Error UPDATE ...', error);
      }
   },
   async removePlayer(req, res) {
      try {
         const { id_player } = req.params;

         const player = await Player.findByPk(id_player);

         await Player.destroy({
            where: {
               id: id_player
            }
         });

         res.json(player);

      } catch (error) {
         console.log('Error REMOVE ...', error);
      }
   },
}

module.exports = PlayerController;