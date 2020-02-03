const Sequelize = require('sequelize');
const objConnection = require('./../database/database-connection');

const MatchModel = objConnection.define('matchs', {
   id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   place: Sequelize.STRING,
	dt_match: Sequelize.DATE,
	qtd_players: Sequelize.INTEGER,

   createdAt: {
      type: Sequelize.DATE,
      allowNull: false
   },
   updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
   }
});

module.exports = MatchModel;