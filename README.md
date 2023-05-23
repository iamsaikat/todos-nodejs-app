# ts-node-todo

`ToDo App` written in NodeJS with TypeScript and MongoDB

## Build with

- Node.js – a JavaScript run-time scripting language
- Expressjs – serves as a Node.js framework
- Typegoose – serves as a wrapper around Mongoose to allow us to write Mongoose models with TypeScript classes.
- Mongoose – an ODM (Object Document Mapping) for accessing and mutating the database
- Bcryptjs – for hashing the passwords
- JsonWebToken – generating JWTs
- Redis – as caching storage for storing the user’s session
- MongoDB – as NoSQL database
- Zod – for validating user inputs
- cors – To allow Cross-Origin Resource Sharing between the backend and frontend

## Features

- Register user
- Login user
- jwt authentication
- Add todo
- Toggle todo
- Update todo
- Remove todo
- Clear all completed todos

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
NODE_ENV=development/production
MONGODB_USERNAME=YOUR_MONGODB_USERNAME
MONGODB_PASSWORD=YOUR_MONGODB_PASSWORD
MONGODB_DATABASE_NAME=YOUR_MONGODB_DATABASE_NAME
ACCESS_TOKEN_PRIVATE_KEY=RSA private key with 2048 & converted into Base64
ACCESS_TOKEN_PUBLIC_KEY=RSA public key with 2048 & converted into Base64
```

## Setup Project

#### Setup docker in system or server for Redis

#### To start app in development mode
```bash
  npm run dev
```
#### To build app in production mode

```bash
  npm run build
```
#### To start app in production mode

```bash
  npm start
```

# Technology Stack

* Node `v16.14.0`
* Npm `8.5.3`
* Express `4.17.17`
* Mongoose `7.2.0`

# LICENSE
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

So, feel free to fork the project!