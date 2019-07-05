const authController = require('./controllers/auth');
const scoreController = require('./controllers/score');
const userController = require('./controllers/user');

const authMiddleware = require('./middlewares/auth');

module.exports.set = (app) => {
  app.post('/login', authController.login);
  app.post('/register', authController.register);
  app.get('/scores', authMiddleware.checkAuth, scoreController.getScores);
  app.get('/scores/:id', authMiddleware.checkAuth, scoreController.getScore);
  app.post('/scores', authMiddleware.checkAuth, scoreController.addScore);
  app.get('/user_scores', authMiddleware.checkAuth, userController.getUsersWithScores);
}