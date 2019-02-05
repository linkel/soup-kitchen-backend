
exports.up = function(knex, Promise) {
	return knex.schema.createTable('images', (table) => {
		table.increments();
        table.string('data', 2000)		
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('images');
};

