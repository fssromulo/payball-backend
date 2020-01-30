const Sequelize = require('sequelize');
const objConnection = require('../database/database-connection');

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

module.exports = MatchPlayerModel;
