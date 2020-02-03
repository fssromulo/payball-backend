const Sequelize = require('sequelize');
const objConnection = require('./../database/database-connection');
const PositionModel = require('./PositionModel');

const PlayerModel = objConnection.define('players', {
   id: {
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

PlayerModel.belongsTo(
   PositionModel,
   {
      foreignKey: 'id_position',
      targetKey: 'id'
   }
);

module.exports = PlayerModel;