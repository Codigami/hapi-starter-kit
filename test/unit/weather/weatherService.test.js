'use strict'

/* eslint-disable max-nested-callbacks */

const nock = require('nock')
const chai = require('chai')
const sinonChai = require('sinon-chai')
const config = require('config')

const weatherService = require('../../../server/weather/weatherService')
const openWeatherHostname = 'http://api.openweathermap.org'

chai.should()
chai.use(sinonChai)

const apiResp = {
  'name': 'Navi Mumbai',
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
    const cityName = 'Vashi'

    // mock openWeatherAPI
    before((done) => {
      nock(openWeatherHostname)
        .get('/data/2.5/weather')
        .query({q: cityName, APPID: config.get('openWeather.apiKey')})
        .reply(200, apiResp)
      done()
    })

    after((done) => {
      nock.restore()
      done()
    })

    it('should return weather for the given city', (done) => {
      weatherService.getWeatherByCityName(cityName).then((data) => {
        data.should.deep.equal(apiResp)
        done()
      })
    })
  })
})
