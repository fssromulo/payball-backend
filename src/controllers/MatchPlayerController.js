const MatchPlayer = require('./../models/MatchPlayerModel');
const { Op } = require('sequelize');

const PlayerModel = require('./../models/PlayerModel');
const MatchModel = require('./../models/MatchModel');
const PositionModel = require('./../models/PositionModel');

const MatchPlayerController = {
	async saveMatchPlayer(req, res) {
		try {
			const { id_match, arrPlayers } = req.body;

			await MatchPlayerController.removeDefault(id_match, arrPlayers);
			let arrInsert = [];

			arrPlayers.forEach((id_player) => {
				arrInsert.push({
					id_match,
					id_player
				});
			});

			// Insert dos jogadores na partida
			const matchPlayer = await MatchPlayer.bulkCreate(arrInsert);
			res.json(matchPlayer);

		} catch (error) {
			console.log('Erro ao salvar a partida com os jogadores >', error);
		}
	},

	async removeMatchPlayer(req, res) {
		try {
			const { id_match, arrPlayers } = req.body;
			const deleted = await MatchPlayerController.removeDefault(id_match, arrPlayers);

			return res.json(deleted);
		} catch (error) {
			console.log('Erro ao REMOVEER a partida com os jogadores >', error);
		}

	},

	async getMatchsPlayers(req, res) {
		try {
			const { id_match } = req.params;
			const matchPlayerList = await MatchPlayer.findAll({
				attributes: [
					"id",
					'id_match',
					'id_player',

				],
            hierarchy: true,
            include: [
               {
                  model: PlayerModel,
                  // as: 'positions', // Alias MySQL p/ tabela
                  required: true,
                  attributes: {
                     exclude: ['id', 'createdAt', 'updatedAt']
                  },
               },
               {
                  model: MatchModel,
                  // as: 'positions', // Alias MySQL p/ tabela
                  required: true,
                  attributes: {
                     exclude: ['id', 'createdAt', 'updatedAt']
                  },
               }
            ],
				where: {
					id_match
				}
			});

			return res.json(matchPlayerList);
		} catch (error) {
			console.log('Erro ao RETORNAR a partida com os jogadores >', error);
		}
	},

	async removeDefault(id_match, arrPlayers) {
		await MatchPlayer.destroy({
			where: {
				id_match
			}
		});
	}
}
module.exports = MatchPlayerController;