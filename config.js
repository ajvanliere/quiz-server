module.exports = {
  port: 3000,
  dbConnectionString: 'postgres://postgres:secretPW@localhost:5432/quiz',
  saltRounds: 2,
  jwtSecret: 'yo-its-a-secret',
  tokenExpireTime: '6h'
}