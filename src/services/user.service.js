const { connection } = require('../database');

module.exports = {
  findUser: async (email) => {
    return connection.knex('users').select('*').where('email', email);
  },
};
