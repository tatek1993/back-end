
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users
        .increments();

    users
        .string('username', 128)
        .notNullable()
        .unique();

    users
        .string('password', 128)
        .notNullable();

    users
        .boolean('over18')
        .notNullable();
        
    users
        .string('zipcode', 9)  
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
