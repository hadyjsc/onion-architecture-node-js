const app = require('./server');
const { connect } = require('../../infrastructure/database');

// Start the server
const startServer = async () => {
    try {
        await connect();
        console.log('Connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

module.exports = {
    startServer
}
