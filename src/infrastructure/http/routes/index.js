const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'What do you do?' })
})

const user = require('./user')
router.use('/users', user)

module.exports = router;
