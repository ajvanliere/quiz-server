const config = require('./config');
const Sequelize = require('sequelize');
var sequelize = new Sequelize(config.dbConnectionString);
// require('sequelize-values')(sequelize);

sequelize.sync()
  .then(() => {
    console.log('Sequelize updated database schema')
  })
  .catch(console.error)

module.exports = sequelize;