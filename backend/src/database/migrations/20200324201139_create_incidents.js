
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //Chave auto incrementada
        table.increments()

        table.string('titulo').notNullable()
        table.string('description').notNullable()

        //decima é equivalente ao FLOAT
        table.decimal('value').notNullable()
        table.string('ong_id').notNullable()

        //Setando a FK da tabela
        table.foreign('ong_id').references('id').inTable('ongs')
        
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
