'use strict'

/**
 * Vendor modules
 */
const config = require('config')

/**
 * Internal modules
 */
const weatherHandler = require('./weatherHandler')
const weatherValidations = require('./weatherValidations')

const API_PATH = '/' + config.get('app.name') + '/api/1.0'

const routes = []

// GET /getWeatherByCityName
routes.push({
  path: API_PATH + '/getWeatherByCityName',
  method: 'GET',
  handler: weatherHandler.getWeatherByCityName,
  config: {
    tags: ['api'],
    validate: weatherValidations.getWeatherByCityName
  }
})

module.exports = routes
