const bunyan = require('bunyan')
const config = require('config')
const appName = require('../../package.json').name

// create a logger instance
const log = bunyan.createLogger({
  name: appName,
  level: config.get('app.logLevel'),
  serializers: bunyan.stdSerializers
})

module.exports = log
