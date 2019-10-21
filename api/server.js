const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth_Router')

const server = express();
const logger = require('../logger')
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger)
server.use('api/auth', authRouter)


//Initial GET
server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;