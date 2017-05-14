//require
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('../config');
var port = 3001;


//allows our controllers to use the express object
var app = module.exports = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//looking for index.html file, which has everything imorted into it
app.use(express.static(__dirname + './../dist'));


//tells massive where our database is
var conn = massive.connectSync({
    connectionString: config.elephantsql
});


//puts a key value ('db': conn) on the settings object inside the express object, connecting us to database(elephantsql)
app.set('db', conn);

//controllers must be required after 'db' is set
var serverCtrl = require('./serverCtrl');

//gets db from the settings object inside the express object
var db = app.get('db');


//endpoints

app.post("/api/addtutorsignup", serverCtrl.tutorsignup);
app.post("/api/updatetutorsignup", serverCtrl.tutorsignupform);
app.get("/api/gettutors", serverCtrl.getTutors);
app.post("/api/writereview", serverCtrl.writeReview);
app.get("/api/getspecifictutor/:id", serverCtrl.getSpecificTutor);
app.get("/api/gettutorreviews/:reviewid", serverCtrl.getTutorReviews);



//port

app.listen(port, function () {
    console.log("Running on port" + port);
});