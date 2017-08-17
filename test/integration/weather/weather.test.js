'use strict'

/* eslint-disable max-nested-callbacks */

const Promise = require('bluebird')
const httpStatus = require('http-status')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const config = require('config')

const weatherService = require('../../../server/weather/weatherService')
const server = require('./../../../server.js')

const API_PATH = '/' + config.get('app.name') + '/api/1.0'

chai.should()
chai.use(sinonChai)

const apiResponse = {
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

describe('## Weather APIs', () => {
  describe('# GET /getWeatherByCityName', () => {
    const cityName = 'Mumbai'
    let getWeatherByCityNameStub

    before((done) => {
      getWeatherByCityNameStub = sinon.stub(weatherService, 'getWeatherByCityName').callsFake(() => {
        return Promise.resolve(apiResponse)
      })
      done()
    })

    after((done) => {
      getWeatherByCityNameStub.restore()
      done()
    })

    it('should return weather for the given city', (done) => {
      const options = {
        method: 'GET',
        url: API_PATH + '/getWeatherByCityName?cityName=' + cityName
      }

      server.inject(options, function (res) {
        res.statusCode.should.equal(httpStatus.OK)
        getWeatherByCityNameStub.should.have.been.calledWith(cityName)
        res.result.should.deep.equal(apiResponse)
        done()
      })
    })

    it('should return an error if cityName is not present', (done) => {
      const options = {
        method: 'GET',
        url: API_PATH + '/getWeatherByCityName'
      }

      server.inject(options, function (res) {
        res.statusCode.should.equal(httpStatus.BAD_REQUEST)
        done()
      })
    })
  })
})
