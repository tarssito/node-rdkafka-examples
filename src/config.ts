import { ConsumerGlobalConfig, GlobalConfig, ProducerGlobalConfig } from 'node-rdkafka'
import dotenv from 'dotenv'

dotenv.config()

const globalConfig: GlobalConfig = {
  'metadata.broker.list': process.env.BROKER_LIST,
  'socket.keepalive.enable': true,
  'security.protocol': 'sasl_ssl',
  'sasl.mechanisms': 'PLAIN',
  'sasl.username': process.env.BROKER_USERNAME,
  'sasl.password': process.env.BROKER_PASSWORD,
  'enable.ssl.certificate.verification': process.env.BROKER_ENABLE_CERTIFICATE_VERIFICATION === 'true',
}

export const producerConfig: ProducerGlobalConfig = { ...globalConfig }

export const consumerConfig: ConsumerGlobalConfig = {
  ...globalConfig,
  'group.id': process.env.CONSUMER_GROUP_ID || 'demo-node-rdkafka',
}
