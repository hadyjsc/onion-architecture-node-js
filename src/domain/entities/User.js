class User {
    constructor(id, name, email, password) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    toJSON() {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            password: this._password,
        };
    }
}

module.exports = User;
