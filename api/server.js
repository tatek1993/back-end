const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const restricted = require('../auth/restrictedMiddleware.js');

const authRouter = require('../auth/authRouter.js');
const searchRouter = require('../searches/searchRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/searches', restricted, searchRouter);


server.get('/', (req, res) => {
    res.send("Hi there! If you are seeing this it means the server is up! Woohoo!")
});

module.exports = server;

