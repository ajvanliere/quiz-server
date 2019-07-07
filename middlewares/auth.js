const jwt = require('jsonwebtoken');
const config =  require('../config');

const checkAuth = (req, res, next) => {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  let token = auth;
  
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    token = auth[1];
  }

  if (!auth) {
    console.log('log1', req.headers) 
		return res.status(403).send({ auth: false, message: 'No token provided.' });
  }



  console.log('log3', token, 'log4', config.jwtSecret) 
	jwt.verify(token, config.jwtSecret, (err, decoded) => {
		if (err) {
      console.log('log2', err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }

    req.user = {
			login: decoded.login,
			id: decoded.id
		};
    next();
	});
}

module.exports = {
    checkAuth
}