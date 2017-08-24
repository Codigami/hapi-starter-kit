# Hapi Starter Kit | Hapi based REST application boilerplate, uses async/await

[![Build Status](https://img.shields.io/travis/Codigami/hapi-starter-kit/master.svg?style=flat-square)](https://travis-ci.org/Codigami/hapi-starter-kit)
[![Coverage Status](	https://img.shields.io/codeclimate/coverage/github/Codigami/hapi-starter-kit.svg?style=flat-square)](https://coveralls.io/github/Codigami/hapi-starter-kit?branch=master)
[![Code Climate](https://codeclimate.com/github/Codigami/hapi-starter-kit/badges/gpa.svg)](https://codeclimate.com/github/Codigami/hapi-starter-kit)
[![bitHound Overall Score](https://www.bithound.io/github/Codigami/hapi-starter-kit/badges/score.svg)](https://www.bithound.io/github/KunalKapadia/express-es6-rest-api-starter)
[![bitHound Dependencies](https://www.bithound.io/github/Codigami/hapi-starter-kit/badges/dependencies.svg)](https://www.bithound.io/github/Codigami/hapi-starter-kit/master/dependencies/npm)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Overview

A lean boilerplate application for building RESTful APIs (Microservice) in Node.js using [hapi.js](https://github.com/hapijs/hapi).
Follows industry standard best practices, and uses latest [async/await](https://blog.risingstack.com/mastering-async-await-in-nodejs/) ES8 feature.
Bring your own front-end.
Plug-in your own Database.

### Features

| Feature                                                                           | Summary                                                                                                                                                                                                                                                     |
|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Uses latest ES8/ES2017 features (async/await)                                     | ES6 support using [Babel](https://babeljs.io/).  |
| Code Linting               			                                            | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. Uses ESLint with [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), which tries to follow the Airbnb JavaScript style guide.                                                                                                |
| Code Coverage via [istanbul](https://www.npmjs.com/package/istanbul)              | Supports code coverage of ES8 code using istanbul and mocha. Code coverage reports are saved in `coverage/` directory post `yarn test` execution. Open `coverage/lcov-report/index.html` to view coverage report. `yarn test` also displays code coverage summary on console. Code coverage can also be enforced overall and per file as well, configured via .istanbul.yml                                                                                                                                                                            |
| Logging via [bunyan](https://www.npmjs.com/package/bunyan)                        | Bunyan is simple and fast JSON logging library. Logs timestamp, machine name and process ID and most importantly makes it really easy to parse logs as it logs in JSON format. You can selectively turn on/off logs by setting log level via LOG_LEVEL env variable.
| API parameter validation via [joi](https://www.npmjs.com/package/joi)             | Validate body, params, query, headers and cookies of a request (via middleware) and return a response with errors; if any of the configured validation rules fail. You won't anymore need to make your route handler dirty with such validations. |
| Pre-commit hooks                                                                  | Runs lint and tests before any commit is made locally, making sure that only tested and quality code goes through
| Uses [yarn](https://yarnpkg.com) over npm                                         | Uses new released yarn package manager by facebook. You can read more about it [here](https://code.facebook.com/posts/1840075619545360) |

### Requirements
 - [node.js](https://nodejs.org/en/download/current/) >= `8.4.0`
 - [yarn](https://yarnpkg.com/en/docs/install) >= `0.27.5`
 - [docker](https://docs.docker.com/engine/installation/#supported-platforms)
    - Docker is optional and is required only if you want to develop and deploy using Docker

### Getting Started
```bash
# Install dependencies
$ yarn
```
![yarn](https://user-images.githubusercontent.com/4172932/29668267-2b4777f6-88fd-11e7-8006-dd0bcc5cb474.png)

```bash
# Start Server
$ yarn start
```
![yarn start](https://user-images.githubusercontent.com/4172932/29668371-9010e5dc-88fd-11e7-9327-68fa1e7944e3.png)

```bash
# Run Tests
$ yarn test
```
![yarn test](https://user-images.githubusercontent.com/4172932/29669393-ea39b5a4-8900-11e7-80f3-ed3256191ecb.png)


### Docker
```bash
# copy sample.dev.env to dev.env
$ cp bin/sample.dev.env bin/dev.env
```

```bash
# Start Server
$ bash bin/development.sh
```
![Docker Development](https://user-images.githubusercontent.com/4172932/29667973-22ae5642-88fc-11e7-8255-9413c8dc037c.png)
### 

```bash
# copy sample.test.env to test.env
$ cp bin/sample.test.env bin/test.env
```

```bash
# Run Tests
$ bash bin/test.sh
```
![docker test](https://user-images.githubusercontent.com/4172932/29669714-f5ad82ac-8901-11e7-86ae-a9af82ca152c.png)

### 

### Environment Config

## Features

- NewRelic
- Hapi Swagger
- Proper project structure 
- Unit and Integration tests with Code Coverage
- Health check API (ping-pong)
- Support for node-config module
- Joi validation for APIs
- ESLint
- Pre commit hooks (lint and test)
- npm tasks (lint and test)
- Docker and docker-compose support for development and test server.
- `.gitignore`, `.gitattributes` and `.editorconfig`

