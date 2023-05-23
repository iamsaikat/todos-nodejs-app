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


- Create .env file with following details:

`NODE_ENV= development/production
MONGODB_USERNAME= MONGODB_USERNAME
MONGODB_PASSWORD= MONGODB_PASSWORD
MONGODB_DATABASE_NAME= MONGODB_DATABASE_NAME
ACCESS_TOKEN_PRIVATE_KEY= Generated RSA private key with 2048 length and converted into Base64
ACCESS_TOKEN_PUBLIC_KEY= Generated RSA public key with 2048 length and converted into Base64`

- Setup docker in system or server for Redis

Start app in development mode:

> npm run dev

Start app in production mode

> npm start

# Technology Stack

* Node `v16.14.0`
* Npm `8.5.3`
* Express `4.17.17`
* Mongoose `7.2.0`
* winston `3.8.2`
# LICENSE

MIT

So, feel free to fork the project!