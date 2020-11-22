exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments().primary();
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('wishlist', function (table) {
      table.increments().primary();
      table.text('title', 2000).notNullable();
      table.string('uuid', 255).notNullable();
      table.text('note', 2000);
      table.boolean('status').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.integer('user_id').references('id').inTable('users');
    })
    .createTable('wishlist_item', function (table) {
      table.increments().primary();
      table.text('title').notNullable();
      table.text('note');
      table.boolean('status').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.integer('wishlist_id').references('id').inTable('wishlist');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('wishlist_item')
    .dropTable('wishlist')
    .dropTable('users');
};
