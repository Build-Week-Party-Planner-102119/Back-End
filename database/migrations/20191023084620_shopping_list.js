
exports.up = function(knex) {
  return knex.schema.createTable('shopping_list', shopping_list => {
    shopping_list.increments();
    shopping_list.integer('party_id').notNullable().references('id').inTable('party');
    shopping_list.string('item',128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('shopping_list')
};
