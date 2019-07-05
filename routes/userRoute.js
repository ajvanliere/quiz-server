const { Router } = require('express');
const User = require('../models/userModel');
// const bcrypt = require('bcrypt');

const router = new Router();

router.get('/users', (req, res, next) => {
  User
    .findAll()
    .then(users => {
      res.send({ users })
    })
    .catch(error => next(error))
})

module.exports = router;