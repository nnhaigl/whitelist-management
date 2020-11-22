const { connection } = require('../database');

module.exports = {
  findAll: async (userId, offset, limit) => {
    return connection
      .knex('wishlist')
      .select('uuid as id', 'title', 'note')
      .where('user_id', userId)
      .offset(offset)
      .limit(limit);
  },
  countAll: async (userId) => {
    return connection
      .knex('wishlist')
      .count('id', { as: 'count' })
      .where('user_id', userId);
  },
  findById: async (uuid) => {
    return connection.knex('wishlist').select('*').where('uuid', uuid);
  },
  insert: async (uuid, title, note, status = false, user_id) => {
    return connection.knex('wishlist').insert({
      uuid,
      title,
      note,
      status,
      user_id,
    });
  },
  update: async (id, title, note, status) => {
    return connection.knex('wishlist').where('uuid', id).update({
      title,
      note,
      status,
    });
  },
};
