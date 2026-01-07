module.exports = {
  port: 3000,
  database: {
    host: 'localhost',
    name: 'api_db'
  },
  jwt: {
    secret: 'flag{jwt_s3cr3t_k3y_1n_g1t_h1st0ry}',
    expiresIn: '24h'
  }
};
