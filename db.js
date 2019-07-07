const config = require('./config');
const Sequelize = require('sequelize');
require('sequelize-values')(Sequelize);

const sequelize = new Sequelize(config.dbConnectionString);

sequelize.sync(
//  {force: true}
)
  .then(() => {
    console.log('Sequelize updated database schema')
  })
  .catch(console.error)

module.exports = sequelize;