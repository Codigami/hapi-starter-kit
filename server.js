'use strict'

/**
 * Vendor modules
 */
const Hapi = require('hapi')
const config = require('config')

/**
 * Internal modules
 */
const routes = require('./routes')
const plugins = require('./plugins')
const logger = require('./server/utils/logger')

const server = new Hapi.Server()

server.connection({
  port: config.get('app.port')
})

//attach routes here
server.route(routes)

//register plugins
server.register(plugins, function (err) {
  if (err) {
    logger.error(err, 'Failed to register hapi plugins')
  }
})

//export modules
module.exports = server
