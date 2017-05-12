//require
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('./config');

//allows our controllers to use the express object
var app = module.exports = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//connects us to database (pgAdmin)
var conn = massive.connectSync({
    connectionString: config.elephantsql
});


//puts a key value ('db': conn) on the settings object inside the express object
app.set('db', conn);

//gets db from the settings object inside the express object
var db = app.get('db');

//controllers must be required after 'db' is set
var productsCtrl = require('./productsCtrl');


//endpoints



//port

var port = 3001;
app.listen(port, function () {
    console.log("Started server on port: " + port);
});