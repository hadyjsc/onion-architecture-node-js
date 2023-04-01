const User = require('../entities/user');

class UserService {
    constructor(userRepository) {
        this._userRepository = userRepository;
    }

    async createUser(name, email, password) {
        const user = new User(null, name, email, password);
        const result = await this._userRepository.create(user);
        return result.toJSON();
    }

    async getUserById(id) {
        const result = await this._userRepository.findById(id);
        if (result) {
            return result.toJSON();
        }
        return null;
    }

    async getUserByEmail(email) {
        const result = await this._userRepository.findByEmail(email);
        if (result) {
            return result.toJSON();
        }
        return null;
    }

    async updateUser(id, userData) {
        const result = await this._userRepository.update(userData);
        if (result) {
            return result.toJSON();
        }
        return null;
    }
}

module.exports = UserService;
