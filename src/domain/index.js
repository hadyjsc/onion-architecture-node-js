const express = require('express');
const bodyParser = require('body-parser');
const database = require('./infra/database');
const UserService = require('./domain/services/userService');
const UserRepository = require('./domain/repositories/userRepository');
const app = express();

// Create a new instance of the UserRepository and pass in the database connection
const userRepository = new UserRepository(database);

// Create a new instance of the UserService and pass in the UserRepository
const userService = new UserService(userRepository);

app.use(bodyParser.json());

app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    // Use the UserService to create a new user
    const result = await userService.createUser(name, email, password);

    res.json(result);
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;

    // Use the UserService to retrieve a user by ID
    const result = await userService.getUserById(id);

    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.get('/users/email/:email', async (req, res) => {
    const { email } = req.params;

    // Use the UserService to retrieve a user by email
    const result = await userService.getUserByEmail(email);

    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
