const express = require('express');
const DevController = require('../src/controllers/devController');

const routes = express.Router();

routes.post('/devs', DevController.store);



module.exports = routes;
