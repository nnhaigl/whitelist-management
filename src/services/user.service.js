const { connection } = require('../database');

module.exports = {
  findUser: async (email) => {
    return connection.users.select('*').where('email', email);
  },
};
