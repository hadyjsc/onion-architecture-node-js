const User = require('../../../application/usecase/user');

class UserController {
    userUsecase
    constructor(userUsecase) {
        if (userUsecase instanceof User) {
            this.userUsecase = userUsecase
        } else {
            this.userUsecase = new User()
        }
    }

    async createUser(req, res) {
        try {
            let payload = req.body

            const user = await this.userUsecase.create(payload);
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }

    async getUserById(req, res) {
        try {
            let payload = {
                id : req.params.id
            }

            const user = await this.userUsecase.getUserById(payload);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }

    async updateUser(req, res) {
        try {
            let payload = {
                id: req.params.id,
                body: req.body
            }

            const user = await this.userUsecase.updateUser(payload);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }
}



module.exports = UserController;
