require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    tableName: 'migrations',
  },
  pool: { min: 0, max: 7 },
  acquireConnectionTimeout: 10000,
});

module.exports = knex;
