const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


//Initial GET
server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;