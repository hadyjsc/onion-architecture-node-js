require('dotenv').config();
const app = require('./server');
const { connect } = require('../../infrastructure/database');

// Start the server
const startServer = async () => {
    try {
        await connect();
        app.listen(process.env.APP_PORT, () => {
            console.log(`Server is running on port ${process.env.APP_PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        throw error;
    }
};


module.exports = { startServer }
// startServer()
