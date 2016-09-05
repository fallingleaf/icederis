import bookshelf from '../database/db'


const User = bookshelf.Model.extend({
    tableName: 'users',
})

export default bookshelf.model('User', User)
