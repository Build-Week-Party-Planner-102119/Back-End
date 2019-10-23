
exports.up = function(knex) {
  return knex.schema.createTable('party', party => {
    party.increments();

    party.integer('user_id').notNullable().references('id').inTable('users');

    party.integer('date')

    party.string('theme', 128)

    party.integer('budget')
    
    party.integer('guests')

    party.string('entertainment', 128)

  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('party')
};
