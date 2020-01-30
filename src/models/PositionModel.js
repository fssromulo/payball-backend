const Sequelize = require('sequelize');
const objConnection = require('./../database/database-connection');

const PositionModel = objConnection.define('positions', {
   id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   name: Sequelize.STRING,
   createdAt: {
      type: Sequelize.DATE,
      allowNull: false
   },
   updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
   }
});

module.exports = PositionModel;