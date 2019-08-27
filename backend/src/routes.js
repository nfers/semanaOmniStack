const express = require('express');
<<<<<<< HEAD

const routes = express.Router();

const devController = require('./Controllers/DevController');
const likeController = require('./Controllers/LikeController');
const dislikeController = require('./Controllers/DisLikeController')

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

routes.post('/devs', devController.store);
routes.get('/devs', devController.index);
=======
const DevController = require('../src/controllers/devController');
const likesController = require('../src/controllers/likeController');
const deslikesController = require('../src/controllers/desLikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', likesController.store);
routes.post('/devs/:devId/deslikes', deslikesController.store);
>>>>>>> e7061fa427dfa37c4f3ca1a621767cb88571079a

routes.post(`/devs/:devId/likes`, likeController.store);
routes.post(`/devs/:devId/dislikes`, dislikeController.store);

module.exports = routes;