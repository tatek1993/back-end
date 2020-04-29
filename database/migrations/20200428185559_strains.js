
exports.up = function(knex) {
  return knex.schema.createTable('strains', strains => {
    strains
            .string('strain')
            .notNullable()
            .primary();

    strains
            .float('rating', 5)
            .notNullable();

    strains
            .string('flavor')
            .notNullable()

    strains
            .string('effects')
            .notNullable();

    strains
            .text('description', 1500)
            .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('strains');
};
