
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl
      .increments();
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl
      .string('password', 128)
      .notNullable();
    tbl
      .boolean('over18')
      .notNullable();
    tbl
      .string('zipcode', 9)  
  })

  .createTable('searches', tbl => {
    tbl
      .increments();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl
      .string('effect')
      .notNullable();
    tbl
      .string('flavor')
      .notNullable();
    tbl
      .string('symptoms')
      .notNullable();
  })
  
  .createTable('strains', tbl => {
    tbl
      .string('strain')
      .notNullable()
      .primary();
    tbl
      .float('rating', 5)
      .notNullable();
    tbl
      .string('flavor')
      .notNullable();
    tbl
      .string('effects')
      .notNullable();
    tbl
      .text('description', 1500)
      .notNullable();
  })

  .createTable('results', tbl => {
    tbl
      .integer('search_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('searches')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl
      .integer('result_number', 5)
      .notNullable()
      .unsigned()
    tbl
      .string('strain_name')
      .notNullable()
      .references('strain')
      .inTable('strains')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('results')
    .dropTableIfExists('strains')
    .dropTableIfExists('searches')
    .dropTableIfExists('users')
};
