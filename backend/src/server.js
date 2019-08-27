const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const connectioString = process.env.CONNECTIO_STRING || 'mongodb://localhost:27017/tindev';

const port = process.env.PORT || 4000;
const server = express();

mongoose.connect(connectioString, {
    useNewUrlParser: true,
})

const routes = require('./routes')

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`Listening in port: ${port}`));