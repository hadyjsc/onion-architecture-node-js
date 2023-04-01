const amqp = require('amqplib');

class MessageProducer {
    async initialize() {
        const connection = await amqp.connect(process.env.MESSAGE_BROKER_URL);
        this.channel = await connection.createChannel();
        await this.channel.assertQueue(process.env.MESSAGE_QUEUE_NAME, {
            durable: true,
        });
    }

    async publishMessage(message) {
        await this.channel.sendToQueue(process.env.MESSAGE_QUEUE_NAME, Buffer.from(JSON.stringify(message)), {
            persistent: true,
        });
    }
}

module.exports = new MessageProducer();
