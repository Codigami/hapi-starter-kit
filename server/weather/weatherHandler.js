'use strict'

const boom = require('boom')
const httpStatus = require('http-status')

const weatherCtrl = require('./weatherCtrl')
const logger = require('../utils/logger')

const getWeatherByCityName = function (req, res) {
  const cityName = req.query.cityName

  weatherCtrl.getWeatherByCityName(cityName)
    .then((data) => {
      return res({
        name: data.name,
        coord: data.coord,
        weather: data.weather
      })
    })
    .catch((e) => {
      logger.error(e, 'error in getting weather')
      return res(boom.wrap(e, httpStatus.BAD_REQUEST, 'error in getting weather'))
    })
}

module.exports = {
  getWeatherByCityName
}
