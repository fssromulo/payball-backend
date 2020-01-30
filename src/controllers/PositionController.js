const Position = require('./../models/PositionModel');

const PositionController = {
	async getPositions(req, res) {
		try {
			const positionList = await Position.findAll();
			res.json(positionList);

		} catch (error) {
			console.error('Erro ao RECUPERAR as posições', error);
		}
	},
	async getPositionById(req, res) {
		try {
			const { id_position } = req.params;

			const position = await Position.findByPk(id_position);
			res.json(position);

		} catch (error) {
			console.error('Erro ao RECUPERAR A POSIÇÃO INFORMADA', error);
		}
	},
	async savePosition(req, res) {
		try {
			const { name } = req.body;

			const positionCreated = await Position.create({name});
			res.json(positionCreated);

		} catch (error) {
			console.error('Erro ao ALTERAR a posição', error);
		}
	},
	async updatePosition(req, res) {
		try {
			const { name } = req.body;
			const { id_position } = req.params;

			const positionUpdated = await Position.update({name}, {
				where: {
					id: id_position
				}
			});

			res.json(positionUpdated);

		} catch (error) {
			console.error('Erro ao SALVAR a posição', error);
		}
	},
	async removePosition(req, res) {
		try {
			const { id_position } = req.params;

			const deletedPosition = await Position.findByPk(id_position);

			await Position.destroy({where:{ 'id': id_position}});
			res.json(deletedPosition);

		} catch (error) {
			console.error('Erro ao REMOVER a posição', error);
		}
	}
}

module.exports = PositionController;