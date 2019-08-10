const express = require('express');
const DevController = require('../src/controllers/devController');
const likesController = require('../src/controllers/likeController');
const deslikesController = require('../src/controllers/desLikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', likesController.store);
routes.post('/devs/:devId/deslikes', deslikesController.store);

module.exports = routes;
