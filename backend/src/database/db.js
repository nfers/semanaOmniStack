const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@clusterapi-6ummn.mongodb.net/test?retryWrites=true&w=majority', 
 {  useMongoClient: true });