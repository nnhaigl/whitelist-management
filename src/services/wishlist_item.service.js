const { connection } = require('../database');

module.exports = {
  findAll: async (wishlistId) => {
    return connection.wishlist_item
      .select('*')
      .where('wishlist_id', wishlistId);
  },
  insertArray: async (data) => {
    return connection.knex('wishlist_item').insert(data, 'id');
  },
  findByIds: async (ids) => {
    return connection.knex('wishlist_item').select('*').whereIn('id', ids);
  },
  update: async (id, title, note, status) => {
    return connection.knex('wishlist_item').where('id', id).update({
      title,
      note,
      status,
    });
  },
};
