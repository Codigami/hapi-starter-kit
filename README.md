# Hapi Starter Kit

## Overview

A hapi starter project containing all necessary utils, while following best practices.
Also contains project structure for APIs used in Crowdfire.

## How to use

- Rename `hapi-starter-kit` to your project name
- Update name and repository url in `package.json`
- Remove Weather API (demo only)
- Copy bin/sample.dev.env to bin/dev.env and update the values
- Copy bin/sample.test.env to bin/sample.test.env and update the values if required
- Run `yarn` locally (To install yarn via brew `brew update && brew install yarn`)
- Start development using docker by running `bash bin/development.sh` or `yarn start` for local development
- Start testing by using docker compose by running `bash bin/test.sh` or `yarn test` for local testing
 

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

