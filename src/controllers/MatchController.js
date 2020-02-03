const Match = require('./../models/MatchModel');
const sequelize = require('sequelize');


const MatchController = {
	async getMatchs(req, res) {
		try {

			const matchList = await Match.findAll({
				attributes: [
					'id',
					'place',
					'qtd_players',
					[sequelize.fn('date_format', sequelize.col('dt_match'), '%d/%m/%Y'), 'dt_match_br'],
					[sequelize.fn('date_format', sequelize.col('dt_match'), '%Y-%m-%d'), 'dt_match_us']
				]
			});

			return res.json(matchList);
		} catch (error) {
			console.log('Error RECUPERAR partidas', error);
		}
	},
	async getMatchById(req, res) {
		try {

			const { id_match } = req.params;

			const match = await Match.findByPk(id_match,
				{
					attributes: [
						'id',
						'place',
						'qtd_players',
						[sequelize.fn('date_format', sequelize.col('dt_match'), '%d/%m/%Y'), 'dt_match_br'],
						[sequelize.fn('date_format', sequelize.col('dt_match'), '%Y-%m-%d'), 'dt_match_us']
					]
				}
			);

			return res.json(match);
		} catch (error) {
			console.log('Error RECUPERAR partidas BY ID', error);
		}
	},
	async saveMatch(req, res) {
		try {

			const { place, dt_match, qtd_players } = req.body;

			const matchCreated = await Match.create({
				place,
				dt_match,
				qtd_players
			});

			return res.json(matchCreated);
		} catch (error) {
			console.log('Error SALVAR partida', error);
		}
	},
	async updateMatch(req, res) {
		try {

			const { place, dt_match, qtd_players } = req.body;
			const { id_match } = req.params;

			const matchUpdated = await Match.update({
				place,
				dt_match,
				qtd_players
			}, {
				where: {
					id: id_match
				}
			});

			return res.json(matchUpdated);
		} catch (error) {
			console.log('Error ALTERAR partida', error);
		}
	},
	async removeMatch(req, res) {
		try {
			const { id_match } = req.params;

			const match = await Match.findByPk(id_match);

			await Match.destroy({
				where: {
					id: id_match
				}
			});

			return res.json(match);
		} catch (error) {
			console.log('Error REMOVER partida', error);
		}
	},
};


module.exports = MatchController;