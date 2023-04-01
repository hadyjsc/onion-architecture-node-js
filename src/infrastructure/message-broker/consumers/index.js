const amqp = require('amqplib');

class MessageConsumer {
    async initialize(onMessageReceived) {
        const connection = await amqp.connect(process.env.MESSAGE_BROKER_URL);
        this.channel = await connection.createChannel();
        await this.channel.assertQueue(process.env.MESSAGE_QUEUE_NAME, {
            durable: true,
        });
        this.channel.consume(process.env.MESSAGE_QUEUE_NAME, async (message) => {
            try {
                const messageContent = JSON.parse(message.content.toString());
                await onMessageReceived(messageContent);
                this.channel.ack(message);
            } catch (error) {
                console.error('Failed to process message', error);
                this.channel.nack(message);
            }
        });
    }
}

module.exports = new MessageConsumer();
