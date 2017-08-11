'use strict'

const rp = require('request-promise')
const config = require('config')

const getWeatherByCityName = function (cityName) {
  const options = {
    uri: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: cityName,
      APPID: config.get('openWeather.apiKey')
    },
    json: true
  }

  return rp(options)
    .then((data) => {
      return data
    })
    .catch((e) => {
      return Promise.reject(e)
    })
}

module.exports = {
  getWeatherByCityName: getWeatherByCityName
}
