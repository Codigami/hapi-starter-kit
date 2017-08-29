'use strict'

const joi = require('joi')

const weatherValidations = {
  // GET /getWeatherByCityName
  getWeatherByCityName: {
    headers: {},
    query: {
      cityName: joi.string().trim().required().description('name of the city whose weather is to be fetched')
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = weatherValidations
