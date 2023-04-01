const BaseController = require('../../common/BaseController');
const User = require('../usecase/user');

class UserController extends BaseController{
    _userUsecase

    constructor(userUsecase) {
        super()
        this._userUsecase = userUsecase || new User()
    }

    async createUser(req, res) {
        try {
            let payload = req.body

            const user = await this._userUsecase.create(payload);
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }

    async getAll(req, res) {
        console.log("usercase", this);
        try {
            const users = await this._userUsecase.getAll()
            res.status(200).json(users)
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

            const user = await this._userUsecase.getUserById(payload);
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

            const user = await this._userUsecase.updateUser(payload);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }
}



module.exports = UserController;
