
exports.up = function(knex) {
  return knex.schema.table('users', function(table) {
    table.string('role', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('role');
  })
};
