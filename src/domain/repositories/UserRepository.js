const User = require('../entities/user');

class UserRepository {
    constructor(database) {
        this._database = database;
    }

    async create(user) {
        const result = await this._database.User.create(user.toJSON());
        return this._fromDatabase(result);
    }

    async findById(id) {
        const result = await this._database.User.findByPk(id);
        return this._fromDatabase(result);
    }

    async findByEmail(email) {
        const result = await this._database.User.findOne({ where: { email } });
        return this._fromDatabase(result);
    }

    async update(user) {
        const result = await this._database.User.update(user.toJSON());
        return this._fromDatabase(result);
    }

    _fromDatabase(result) {
        if (result) {
            return new User(
                result.id,
                result.name,
                result.email,
                result.password
            );
        }
        return null;
    }
}

module.exports = UserRepository;
