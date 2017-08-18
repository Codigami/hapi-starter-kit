const bunyan = require('bunyan')
const config = require('config')

// create a logger instance
const log = bunyan.createLogger({
  name: config.get('app.name'),
  level: config.get('app.logLevel'),
  serializers: bunyan.stdSerializers
})

module.exports = log
