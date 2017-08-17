'use strict'

const rp = require('request-promise')
const config = require('config')
const logger = require('../utils/logger')

const getWeatherByCityName = async function (cityName) {
  const options = {
    uri: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: cityName,
      APPID: config.get('openWeather.apiKey')
    },
    json: true
  }

  try {
    return await rp(options)
  } catch (error) {
    logger.error(error, `Failed to fetch weather for ${cityName}`)
    error.logged = true
    throw error
  }
}

module.exports = {
  getWeatherByCityName: getWeatherByCityName
}
