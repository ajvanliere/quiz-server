const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
})

module.exports = User;