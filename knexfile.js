// Update with your config settings.

require('dotenv').config()
module.exports = {
  client: 'pg',
  connection: {
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
  seeds: {
    directory: './db/seeds',
    tableName: 'knex_seeds',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations',
  },
}
