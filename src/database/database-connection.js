const Sequelize = require('sequelize');
const sequelize = new Sequelize(
   'payball',
   'backup',
   'UniSeguro',
   {
      dialect: 'mysql',
      host: 'localhost'
   }
);

module.exports = sequelize;