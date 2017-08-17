'use strict'

const weatherService = require('./weatherService')

const getWeatherByCityName = async function (cityName) {
  return await weatherService.getWeatherByCityName(cityName)
}

module.exports = {
  getWeatherByCityName
}
