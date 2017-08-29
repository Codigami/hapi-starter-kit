'use strict'

// require new relic at the top only in production environment
if (process.env.NODE_ENV === 'production') {
  require('newrelic')
}

const config = require('config')

const server = require('./server')
const logger = require('./server/utils/logger')

const gracefulStopServer = function () {
  // Wait 10 secs for existing connection to close and then exit.
  server.stop({timeout: 10 * 1000}, () => {
    logger.info('Shutting down server')
    process.exit(0)
  })
}

process.on('uncaughtException', err => {
  logger.error(err, 'Uncaught exception')
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error({
    promise: promise,
    reason: reason
  }, 'unhandledRejection')
  process.exit(1)
})

process.on('SIGINT', gracefulStopServer)
process.on('SIGTERM', gracefulStopServer)

/**
 * Starts the server
 * @returns {Promise.<void>}
 */
const startServer = async function () {
  try {
    // add things here before the app starts, like database connection check etc
    await server.start()
    logger.info(`server started at port: ${config.get('app.port')} with env: ${config.util.getEnv('NODE_ENV')}`)
  } catch (error) {
    logger.error(error)
    process.exit(1)
  }
}

startServer()
