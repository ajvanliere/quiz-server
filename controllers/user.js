const userService = require('../services/user');

function getUsersWithScores(req, res){
	return userService.getUsersWithScores()
	.then(data => res.send(data));
};

module.exports = {
	getUsersWithScores
}