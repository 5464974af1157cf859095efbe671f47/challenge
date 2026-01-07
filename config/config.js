module.exports = {
  port: 3000,
  database: {
    host: 'localhost',
    name: 'api_db'
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '24h'
  }
};
