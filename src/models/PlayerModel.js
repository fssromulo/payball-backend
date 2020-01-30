const Sequelize = require('sequelize');
const objConnection = require('./../database/database-connection');

const PlayerModel = objConnection.define('players', {
   id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   name: Sequelize.STRING,
   skills: Sequelize.INTEGER,
   id_position: Sequelize.INTEGER,
   createdAt: {
      type: Sequelize.DATE,
      allowNull: false
   },
   updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
   }
});

module.exports = PlayerModel;