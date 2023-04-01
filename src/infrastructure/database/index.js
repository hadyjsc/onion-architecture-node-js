const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: true,
        underscored: true,
        paranoid: true,
    },
    dialectOptions: {},
});

const connect = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

module.exports = {
    connect,
    sequelize,
};
