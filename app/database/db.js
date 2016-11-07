import dbconn from './knexfile'

const knex = require('knex')(dbconn.development)

const bookshelf = require('bookshelf')(knex)
bookshelf.plugin('registry')
bookshelf.plugin('pagination')

export default bookshelf
