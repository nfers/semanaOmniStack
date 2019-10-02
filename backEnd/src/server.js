const express = require('express');
const mongoose = require('mongoose');

const routes = require('./Routes/routes');

const app = express();

mongoose.connect('mongodb://localhost:17017/omniStack', { useUnifiedTopology: true,
useNewUrlParser: true } );

console.log('Conectado ao banco');

app.use(express.json());
app.use(routes);

app.listen(3031);




