const httpStart = require('./http/index')
const initializeMessageBroker = require('./message-broker/index');
// const cacheService = require('./cacheService');
// const logger = require('./logger');
// const UserRepository = require('./userRepository');
// const UserMapper = require('./userMapper');

httpStart.startServer()
// initializeMessageBroker.initializeMessageBroker()