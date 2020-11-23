require('dotenv').config();
const config = require('../../knexfile')[process.env.NODE_ENV || 'default'];
const knex = require('knex')(config);
module.exports = {
  users: knex('users'),
  wishlist: knex('wishlist'),
  wishlist_item: knex('wishlist_item'),
  knex,
};
