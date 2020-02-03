const Sequelize = require('sequelize');
const sequelize = new Sequelize(
   'payball',
   'root',
   'romuloroot',
   {
      dialect: 'mysql',
      host: 'payball2.clnkn1jxykut.us-east-2.rds.amazonaws.com'
   }
);

module.exports = sequelize;

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(
//    'payball',
//    'backup',
//    'UniSeguro',
//    {
//       dialect: 'mysql',
//       host: 'localhost'
//    }
// );

// module.exports = sequelize;