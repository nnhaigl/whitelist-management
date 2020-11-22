require('dotenv').config();
const { logger } = require('../utils');
const BPromise = require('bluebird');
const parse = require('pg-connection-string').parse;
const pg = require('pg');
const Client = pg.Client;
const ADMIN_DB = 'postgres';

var errors = {
  '42P04': {
    name: 'duplicate_database',
    message: 'Attempted to create a duplicate database.',
  },
  '3D000': {
    name: 'invalid_catalog_name',
    message: 'Attempted to drop a database that does not exist.',
  },
  23505: {
    name: 'unique_violation',
    message: 'Attempted to create a database concurrently.',
  },
  55006: {
    name: 'drop_database_in_use',
    message:
      'Attempted to drop a database that is being accessed by other users',
  },
};

function PgError(pgErr) {
  var message =
    (errors[pgErr.code] ? errors[pgErr.code].message : 'Postgres error.') +
    ' Cause: ' +
    pgErr.message;
  var error = Error.call(this, message);
  this.message = error.message;

  this.name = errors[pgErr.code] ? errors[pgErr.code].name : 'PgError';

  this.stack = error.stack;
  this.pgErr = pgErr;
}
PgError.prototype = Object.create(Error.prototype);
const pgconfig = require('../../knexfile').connection;
const opts = {
  user: pgconfig.user,
  password: pgconfig.password,
  port: pgconfig.port,
  host: pgconfig.host,
};
dbName = pgconfig.database;
function createOrDropDatabase(action) {
  console.log('xxxxx');
  logger.info('start create database');
  action = action.toUpperCase();
  let config;
  if (typeof opts === 'string') {
    config = parse(opts);
    config.database = ADMIN_DB;
  } else {
    if (!opts.database) {
      opts.database = ADMIN_DB;
    }
    config = opts;
  }
  return new BPromise(async (resolve, reject) => {
    const client = new Client(config);
    try {
      client.connect();

      var escapedDbName = dbName.replace(/\"/g, '""');
      var sql = action + ' DATABASE ' + escapedDbName;
      const checkDB = await runQuery(
        client,
        `select * from pg_database where datname = '${escapedDbName}'`
      );
      if (checkDB.rowCount === 0) {
        await runQuery(client, sql, function (pgErr, res) {
          var err;
          if (pgErr) {
            err = new PgError(pgErr);
            reject(err);
            return;
          }
          resolve(res);
        });
      } else {
        logger.info('Database exists');
      }
      resolve(true);
    } catch (err) {
    } finally {
      client.end();
    }
  });
}

const runQuery = async (client, query, cb) => {
  console.log(query);
  return new BPromise(async (resolve, reject) => {
    client.query(query, function (pgErr, res) {
      var err;
      if (pgErr) {
        err = new PgError(pgErr);
        reject(err);
        return;
      }
      resolve(res);
    });
  }).nodeify(cb);
};

module.exports = createOrDropDatabase('create');
