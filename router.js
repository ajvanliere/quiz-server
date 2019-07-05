const authController = require('./controllers/auth');

module.exports.set = app => {
  app.post('/login', authController.login);
  app.post('/register', authController.register);
}