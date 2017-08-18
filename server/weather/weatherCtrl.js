'use strict'

const weatherService = require('./weatherService')

const getWeatherByCityName = async function (cityName) {
  return weatherService.getWeatherByCityName(cityName)
}

module.exports = {
  getWeatherByCityName
}
