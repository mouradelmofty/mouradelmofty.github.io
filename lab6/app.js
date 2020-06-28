var express = require('express');
var app = express();
var surveyController = require('./surveyController');
//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static("./public"));
//fire controllers
surveyController(app);
//liste to port
app.listen(3000);
console.log("Listening to port 3000");
