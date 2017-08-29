# Hapi Starter Kit | Hapi based REST application boilerplate, uses async/await

[![Build Status](https://img.shields.io/travis/Codigami/hapi-starter-kit/master.svg?style=flat-square)](https://travis-ci.org/Codigami/hapi-starter-kit)
[![Code Climate](https://codeclimate.com/github/Codigami/hapi-starter-kit/badges/gpa.svg)](https://codeclimate.com/github/Codigami/hapi-starter-kit)
[![Test Coverage](https://codeclimate.com/github/Codigami/hapi-starter-kit/badges/coverage.svg)](https://codeclimate.com/github/Codigami/hapi-starter-kit/coverage)
[![bitHound Overall Score](https://www.bithound.io/github/Codigami/hapi-starter-kit/badges/score.svg)](https://www.bithound.io/github/Codigami/hapi-starter-kit)
[![bitHound Dependencies](https://www.bithound.io/github/Codigami/hapi-starter-kit/badges/dependencies.svg)](https://www.bithound.io/github/Codigami/hapi-starter-kit/master/dependencies/npm)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Overview

A lean boilerplate application for building RESTful APIs (Microservice) in Node.js using [hapi.js](https://github.com/hapijs/hapi).
Follows industry standard best practices, and uses latest [async/await](https://blog.risingstack.com/mastering-async-await-in-nodejs/) ES8 feature.
Bring your own front-end.
Plug-in your own Database.

## Features

| Feature                                                                                         | Summary                                                                                                                                                                                                                                                      |
|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Uses latest ES8/ES2017 features (async/await)                                                   | Uses latest ES7 and ES8 features including async/await  |
| Application Configuration via [config](https://github.com/lorenwest/node-config)                | Node-config organizes hierarchical configurations for your app deployments. It lets you define a set of default parameters, and extend them for different deployment environments (development, qa, staging, production, etc.).
| Auto Documentation via [hapi-swagger](https://www.npmjs.com/package/hapi-swagger)               | This will self document the API interface. You can also tests your APIs using the Swagger interface.
| Unit and Integration Tests via [Mocha](https://mochajs.org/) with async/await                   | Demo unit and integration tests using latest ES7/ES8 features. 
| Code Coverage via [istanbul](https://www.npmjs.com/package/istanbul)                            | Supports code coverage of ES8 code using istanbul and mocha. Code coverage reports are saved in `coverage/` directory post `yarn test` execution. Open `coverage/lcov-report/index.html` to view coverage report. `yarn test` also displays code coverage summary on console. Code coverage can also be enforced overall and per file as well, configured via .istanbul.yml                                                                                                                                                                            |
| Logging via [bunyan](https://www.npmjs.com/package/bunyan)                                      | Bunyan is simple and fast JSON logging library. Logs timestamp, machine name and process ID and most importantly makes it really easy to parse logs as it logs in JSON format. You can selectively turn on/off logs by setting log level via LOG_LEVEL env variable.
| Code Linting via [Standard](https://github.com/standard/standard)                               | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. 
| API parameter validation via [joi](https://www.npmjs.com/package/joi)                           | Validate body, params, query, headers and cookies of a request (via middleware) and return a response with errors; if any of the configured validation rules fail. You won't anymore need to make your route handler dirty with such validations. |
| Application monitoring via [New Relic](https://newrelic.com/application-monitoring)             | Set `NEW_RELIC_APP_NAME` and `NEW_RELIC_LICENSE_KEY` environment variables in production environment to get metrics in New Relic Dashboard |
| Pre-commit hooks via [husky](https://www.npmjs.com/package/husky)                               | Runs lint and tests before any commit is made locally, making sure that only tested and quality code goes through
| Uses [Sinon](https://www.npmjs.com/package/sinon) for spies, stubs and mocks                    | Standalone and test framework agnostic JavaScript test spies, stubs and mocks 
| Uses [nock](https://www.npmjs.com/package/nock) for mocking http requests in integration tests  | Nock is an HTTP mocking and expectations library. It can be used to test modules that perform HTTP requests in isolation.
| Uses [yarn](https://yarnpkg.com) over npm                                                       | Uses new released yarn package manager by facebook. You can read more about it [here](https://code.facebook.com/posts/1840075619545360) |
| [Docker](https://www.docker.com/) compatible                                                    | Docker and [Docker Compose](https://docs.docker.com/compose/overview/) files to develop and deploy via Docker |
| Uses [EditorConfig](http://editorconfig.org/)                                                   | EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs |

## Requirements
 - [node.js](https://nodejs.org/en/download/current/) >= `8.4.0`
 - [yarn](https://yarnpkg.com/en/docs/install) >= `0.27.5`
 - [docker](https://docs.docker.com/engine/installation/#supported-platforms)
    - Docker is optional and is required only if you want to develop and deploy using Docker

## Getting Started
```bash
# Install dependencies
$ yarn
```
![yarn](https://user-images.githubusercontent.com/4172932/29668267-2b4777f6-88fd-11e7-8006-dd0bcc5cb474.png)

```bash
# Start Server
# Set environment variables defined in `config/custom-environment-variables.json` like `OPEN_WEATHER_API_KEY=xxx`
$ yarn start
```
![yarn start](https://user-images.githubusercontent.com/4172932/29668371-9010e5dc-88fd-11e7-9327-68fa1e7944e3.png)

```bash
# Try GET /ping to make sure server is up
$ curl http://localhost:3030/ping
```

```bash
# Run Tests
$ yarn test
```
![yarn test](https://user-images.githubusercontent.com/4172932/29669393-ea39b5a4-8900-11e7-80f3-ed3256191ecb.png)


## Docker

#### Development
```bash
# copy sample.dev.env to dev.env
$ cp bin/sample.dev.env bin/dev.env
```

```bash
# Start Server
$ bash bin/development.sh
```
![Docker Development](https://user-images.githubusercontent.com/4172932/29667973-22ae5642-88fc-11e7-8255-9413c8dc037c.png)

### Tests

```bash
# copy sample.test.env to test.env
$ cp bin/sample.test.env bin/test.env
```

```bash
# Run Tests
$ bash bin/test.sh
```
![docker test](https://user-images.githubusercontent.com/4172932/29669714-f5ad82ac-8901-11e7-86ae-a9af82ca152c.png)

## Environment Configuration
[config](https://github.com/lorenwest/node-config) is used to configure application.
- Default values of environment variables, which are common across all environments can be configured via `config/default.json`
- Values specific to a particular environment can be set by creating a file with same name in config directory. Like `config/test/json` for test environment.
- `config/custom-environment-variables` is used to read values from environment variables. For ex. if `APP_PORT` env var is set it can be accessed as `config.get('app.port')`.
You can read more on custom environment variables [here](https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables).

## More Tasks
```bash
# Run lint
yarn lint
```
![yarn lint](https://user-images.githubusercontent.com/4172932/29670154-7207532c-8903-11e7-9695-32fa4c25122c.png)

## Deployment
- Simply set environment variables defined in `bin/sample.dev.env` in your own environment (AWS, Heroku etc) and `yarn start`

#### Docker
- Build the docker image
    - `docker build -t hapi-starter-kit-oss .`
- Start Docker Container
    - `docker run -d -p 3030:3030 --name hapi-starter-kit-oss hapi-starter-kit-oss` 

## Documentation
- `hapi-swagger` self documents all the APIs.
- Visit `http://localhost:3030/documentation` to access the documentation after starting the server.
![Documentation](https://user-images.githubusercontent.com/4172932/29810159-75a90d10-8cbc-11e7-986d-4059315052d6.png)

## Miscellaneous
- To turn off logs getting logged via `good-console` in development environment, remove it from `plugins.js`

## Issues
Please feel free to open an issue if you can have any questions or trouble using this starter kit.

## Contributions
Contributions are all welcome and encouraged. For code contributions submit a pull request with unit test.

## License
This project is licensed under the [MIT License](https://github.com/Codigami/hapi-starter-kit/blob/master/LICENSE)

