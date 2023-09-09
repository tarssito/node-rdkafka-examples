import { KafkaConsumer } from 'node-rdkafka'
import { consumerConfig } from './config'

const [, , topic] = process.argv

/**
 *
 * 'smallest','earliest' - redefine automaticamente o deslocamento para o deslocamento menor,
 * 'largest','latest' - redefine automaticamente o deslocamento para o maior deslocamento,
 * 'error' - aciona um erro (ERR__AUTO_OFFSET_RESET) que é recuperado consumindo mensagens e verificando 'message->err'
 *
 * default: largest
 */

const consumerStream = KafkaConsumer.createReadStream(consumerConfig, { 'auto.offset.reset': 'latest' }, { topics: topic })
consumerStream
  .on('data', (message) => {
    const { partition, value, key } = message
    const decodeKey = key.toString('utf-8')
    const decodedMessage = value.toString('utf-8')
    console.log('Details Message:', { partition, key: decodeKey, message: decodedMessage })
  })
  .on('error', (error) => {
    console.log('Error to connect kafka...', {
      extra: { topic, error: JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error))) },
    })
  })
