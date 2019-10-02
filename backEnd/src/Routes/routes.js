const express = require('express');
const multer = require('multer');

const ImageConfig = require('../config/upload');
const sessionController = require('../Controllers/sessionController');
const spotController = require('../Controllers/spotController');
const dashboardController = require('../Controllers/dashboardController');
const bookingController = require('../Controllers/bookingController');

const routes = express.Router();
const upload = multer(ImageConfig);

routes.post('/sessions', sessionController.store);

routes.get('/spots', spotController.index);
routes.post('/spots', upload.single('thumbnail'), spotController.store);

routes.get('/dashboard', dashboardController.show);

routes.post('/spots/:spot_id/bookings', bookingController.store);

module.exports = routes;


