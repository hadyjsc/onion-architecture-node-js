const { Sequelize } = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
        paranoid: true,
    },
});

const User = UserModel(sequelize, Sequelize);

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');
        await sequelize.sync({ force: false });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

module.exports = {
    connect,
    User,
};
