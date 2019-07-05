const scoreService = require('../services/score');

function getScores(req, res){
  scoreService.getAll()
  .then(data => res.send(data));
};

function getScore(req, res){
  scoreService.getByPk(req.params.id)
  .then(data => res.send(data));
};

function addScore(req, res){
  scoreService.add({
    title: req.body.title,
    level: req.body.level,
    question_correct: req.body.question_correct,
    question_attempted: req.body.question_attempted,
    user_id: req.user.id
  })
  .then(data => res.send(data));
};

module.exports = {
  getScores,
  getScore,
  addScore
}