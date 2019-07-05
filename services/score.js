const Scores = require('../models').Score;

const getAll = () => Scores.findAll();

const getByPk = id => Scores.findByPk(id);

const add = score => Scores.create(score);

module.exports = {
  add,
  getAll,
  getByPk
};