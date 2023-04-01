const UserService = require('../../../domain/services/UserService');

class createUser {
    userService
    constructor(userService) {
        super();
        this.userService = userService || new UserService()
    }

    async execute( name, email, password) {
        const user = await this.userService.createUser( name, email, password );
        return user;
    }
}

module.exports = { createUser };
