'use strict'

/* eslint-disable max-nested-callbacks */

const nock = require('nock')
const chai = require('chai')
const httpStatus = require('http-status')
const sinonChai = require('sinon-chai')
const config = require('config')

const weatherService = require('../../../server/weather/weatherService')
const openWeatherHostname = 'http://api.openweathermap.org'

chai.should()
chai.use(sinonChai)

const apiResp = {
  'name': 'Mumbai',
  'coord': {
    'lon': 73.02,
    'lat': 19.04
  },
  'weather': [
    {
      'id': 500,
      'main': 'Rain',
      'description': 'light rain',
      'icon': '10d'
    }
  ]
}

describe('## Weather Service', () => {
  describe('.getWeatherByCityName', () => {
    const cityName = 'Mumbai'

    it('should return weather for the given city', async () => {
      // mock openWeatherAPI
      nock(openWeatherHostname)
        .get('/data/2.5/weather')
        .query({q: cityName, APPID: config.get('openWeather.apiKey')})
        .reply(httpStatus.OK, apiResp)

      const data = await weatherService.getWeatherByCityName(cityName)
      data.should.deep.equal(apiResp)

      // clean all interceptors
      nock.cleanAll()
    })

    it('should return error in case of non 200 response', async () => {
      // mock openWeatherAPI
      nock(openWeatherHostname)
        .get('/data/2.5/weather')
        .query({q: cityName, APPID: config.get('openWeather.apiKey')})
        .reply(httpStatus.INTERNAL_SERVER_ERROR)

      try {
        await weatherService.getWeatherByCityName(cityName)
      } catch (error) {
        error.response.status.should.equal(httpStatus.INTERNAL_SERVER_ERROR)
      }

      // clean all interceptors
      nock.cleanAll()
    })
  })
})
