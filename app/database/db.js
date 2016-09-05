import dbconn from './knexfile'

const knex = require('knex')(dbconn.development)

const bookshelf = require('bookshelf')(knex)
bookshelf.plugin('registry')

export default bookshelf
