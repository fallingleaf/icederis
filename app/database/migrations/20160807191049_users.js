
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('first_name', 256).notNullable();
        table.string('last_name', 256).notNullable();
        table.string('email', 256).notNullable();
        table.string('password', 256).notNullable();
        table.string('token', 256);
        table.string('role', 256);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
