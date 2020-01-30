const Match = require('./../models/MatchModel');


const MatchController = {
	async getMatchs(req, res) {
		try {

			const matchList = await Match.findAll();

			return res.json(matchList);
		} catch (error) {
			console.log('Error RECUPERAR partidas', error);
		}
	},
	async getMatchById(req, res) {
		try {

			const { id_match } = req.params;

			const match = await Match.findByPk(id_match);

			return res.json(match);
		} catch (error) {
			console.log('Error RECUPERAR partidas BY ID', error);
		}
	},
	async saveMatch(req, res) {
		try {

			const { place, dt_match } = req.body;

			const matchCreated = await Match.create({
				place,
				dt_match
			});

			return res.json(matchCreated);
		} catch (error) {
			console.log('Error SALVAR partida', error);
		}
	},
	async updateMatch(req, res) {
		try {

			const { place, dt_match } = req.body;
			const { id_match } = req.params;

			const matchUpdated = await Match.update({
				place,
				dt_match
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