const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  login: {
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
    allowNull: false
  },
},
);

const Score = sequelize.define('scores', {
  title: Sequelize.STRING,
  level: {
    type: Sequelize.STRING,
  },
  question_correct: {
    type: Sequelize.BOOLEAN
  },
  question_attempted: {
    type: Sequelize.BOOLEAN
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

User.hasMany(Score, { foreignKey: 'user_id' });

module.exports = {
  User,
  Score
}