'use strict'

/***
 * Internal modules
 */
const weatherService = require('./weatherService')

const getWeatherByCityName = function (cityName) {
  return weatherService.getWeatherByCityName(cityName)
    .then((data) => {
      return data
    })
}

module.exports = {
  getWeatherByCityName
}
