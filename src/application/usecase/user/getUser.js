const UserService = require("../../../domain/services/UserService");

class GetUser {
    userService
    constructor(userService) {
        this.userService = userService || new UserService()
    }

    async execute() {
        const user = await this.userService.getUser()
        return user;
    }
}

module.exports = { GetUser };
