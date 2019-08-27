const express = require('express');

const routes = express.Router();

const devController = require('./Controllers/DevController');
const likeController = require('./Controllers/LikeController');
const dislikeController = require('./Controllers/DisLikeController')

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

routes.post('/devs', devController.store);
routes.get('/devs', devController.index);

routes.post(`/devs/:devId/likes`, likeController.store);
routes.post(`/devs/:devId/dislikes`, dislikeController.store);

module.exports = routes;