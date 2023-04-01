const createUser = require('./createUser')

class User {
    async create({ name, email, password }) {
        const user = await createUser( name, email, password );
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
