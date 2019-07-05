const config =  require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authService = require('../services/auth');
const userService = require('../services/user');

function login(req, res){
     return authService.authenticate(req.body)
     .then(token => {
          res.send({
               success: true,
               data: { token }
          });
     })
     .catch(err => {
          res.send({
               success: false,
               message: err.message
          });
     })
};

function register(req, res){
     const login = req.body.login;
     return userService.getUserByLogin(req.body.login || '')
     .then(exists => {

          if (exists){
               return res.send({
                   success: false,
                   message: 'Registration failed. User with this email already registered.'
               });
          }

          var user = {
               login: req.body.login,
               password: bcrypt.hashSync(req.body.password, config.saltRounds),
               name: req.body.name
           }

          return userService.addUser(user)
          .then(() => res.send({success: true}));
     });
};

module.exports = {
    login,
    register
}