const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('../src/routes');
const cors = require('cors');


const server = express();


mongoose.connect('mongodb+srv://apicurso:Nfs12Mrc@clusterapi-6ummn.mongodb.net/tinderDev?retryWrites=true&w=majority', {
    useNewUrlParser: true });

server.use(express.json());
server.use(cors()); 
server.use(routes);

server.listen(3333);

