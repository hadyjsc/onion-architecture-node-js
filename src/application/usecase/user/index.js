const createUser = require('./createUser')
const getUser = require('./getUser')

class User {
    async create({ name, email, password }) {
        const user = await createUser( name, email, password );
        return user;
    } 

    async getAll() {
        const user = await getUser()
        return user;
    }
    
    async getUserById(payload) {
        return null
    }

    async updateUser(payload) {
        return null
    }
}



module.exports = User;
