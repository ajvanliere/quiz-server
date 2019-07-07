const userService = require('../services/user');

function getUsersWithScores(req, res) {
	return userService.getUsersWithScores()
	.then(data => res.send(data));
}

function getUsers(req, res) {
  return userService.getUsers()
  .then(data => res.send(data));
}

module.exports = {
  getUsersWithScores,
  getUsers
}