const MessageProducer = require('./producers/index');
const MessageConsumer = require('./consumers/index');

async function initializeMessageBroker() {
  await MessageProducer.initialize();
  await MessageConsumer.initialize(onMessageReceived);
}

async function onMessageReceived(messageContent) {
  // Handle incoming message here
}

module.exports = {
  initializeMessageBroker,
};
