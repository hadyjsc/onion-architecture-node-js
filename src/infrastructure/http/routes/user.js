const express = require('express');
const router = express.Router();
const UserRepository = require('../../../domain/repositories/UserRepository');
const UserService = require('../../../domain/services/UserService')
const UserController = require('../controllers/UserController');

const userService = new UserService(new UserRepository());
const controller = new UserController(userService)

router.post('/', controller.createUser);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);

module.exports = router;
