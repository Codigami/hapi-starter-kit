'use strict'

const boom = require('boom')
const httpStatus = require('http-status')

const weatherCtrl = require('./weatherCtrl')
const logger = require('../utils/logger')

const getWeatherByCityName = async function (req, res) {
  const cityName = req.query.cityName

  try {
    const data = await weatherCtrl.getWeatherByCityName(cityName)
    return res({
      name: data.name,
      coord: data.coord,
      weather: data.weather
    })
  } catch (error) {
    const errorMessage = `Failed to fetch weather for ${cityName}`
    !error.logged && logger.error(error, errorMessage)
    return res(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
  }
}

module.exports = {
  getWeatherByCityName
}
