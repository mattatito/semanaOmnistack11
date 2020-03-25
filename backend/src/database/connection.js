const knex = require('knex')
const confuguration = require('../../knexfile')

const connection = knex(confuguration.development)

module.exports = connection 