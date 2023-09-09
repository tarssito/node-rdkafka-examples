import { Producer } from 'node-rdkafka'
import { producerConfig } from './config'

const [, , topic] = process.argv

const producer = new Producer(producerConfig)

producer.connect()
producer
  .on('ready', (arg) => {
    console.log(`Producer ${JSON.stringify(arg)} Ready`)

    const totalMessages = 20

    for (let i = 0; i < totalMessages; i++) {
      const key = 'key_' + i
      const message = 'Only partitcion 2 message_' + i
      producer.produce(topic, 2, Buffer.from(message), key)
    }

    producer.disconnect()
  })
  .on('delivery-report', (err, report) => {
    if (err) console.log('Error to get message', { err })
    console.log('delivery-report: ' + JSON.stringify(report))
  })
  .on('event.error', (error) => {
    console.log(`Error sending message!`, {
      extra: { topic, error: JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error))) },
    })
  })
  .on('disconnected', () => {
    console.log('Producer disconected')
  })
