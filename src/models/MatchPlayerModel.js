const Sequelize = require('sequelize');
const objConnection = require('../database/database-connection');
const PlayerModel = require('./PlayerModel');
const MatchModel = require('./MatchModel');
const PositionModel = require('./PositionModel');

const MatchPlayerModel = objConnection.define('matchs_players', {
   id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
	},

   id_match: Sequelize.INTEGER,
	id_player: Sequelize.INTEGER,

   createdAt: {
      type: Sequelize.DATE,
      allowNull: false
   },
   updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
   }

});

MatchPlayerModel.belongsTo(
   PlayerModel,
   {
      foreignKey: 'id_player',
      targetKey: 'id'
   }
);

MatchPlayerModel.belongsTo(
   MatchModel,
   {
      foreignKey: 'id_match',
      targetKey: 'id'
   }
);

// PlayerModel.belongsTo(
//    PositionModel,
//    {
//       foreignKey: 'id_position',
//       targetKey: 'id'
//    }
// );

module.exports = MatchPlayerModel;
