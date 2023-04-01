const express = require('express');
const router = express.Router();
const UserRepository = require('../../../domain/repositories/UserRepository');
const UserService = require('../../../domain/services/UserService')
const UserController = require('../../../application/controllers/UserController');
const User = require('../../database/models/user');

const userModel = new User()
const userRepository = new UserRepository(userModel)
const userService = new UserService(userRepository);
const controller = new UserController(userService)

router.post('/', controller.createUser);
router.get('/', controller.getAll),
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);

module.exports = router;
