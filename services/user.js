const sequelize = require('../db');
const Users = require('../models').User;
const Scores = require('../models').Score;

const addUser = user => Users.create(user);
const getUserByLogin = login => Users.findOne({where: {login}});

const getUsersWithScores = () => {
	return Users.findAll({
		attributes: ['login', 'id'],
		include: [{
			model: Scores,
			as: 'scores',
			attributes: ['level', 'question_correct', 'question_attempted']
		}],
	})
	.then(sequelize.getValues);
}

module.exports = {
	addUser,
	getUsersWithScores,
	getUserByLogin
}