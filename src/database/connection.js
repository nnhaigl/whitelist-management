const config = require('../../knexfile');
const knex = require('knex')(config);
module.exports = {
  users: knex('users'),
  wishlist: new knex('wishlist'),
  wishlist_item: knex('wishlist_item'),
  knex,
};
