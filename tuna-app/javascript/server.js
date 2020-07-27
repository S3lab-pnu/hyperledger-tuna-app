var express       = require('express');        // call express
var app           = express();                 // define our app using express
var bodyParser    = require('body-parser');
var http          = require('http')
var fs            = require('fs');
var path          = require('path');
var util          = require('util');
var os            = require('os');
const { Gateway, Wallets } = require('fabric-network');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// instantiate the app
var app = express();

// this line requires and runs the code from our routes.js file and passes it app
require('./routes.js')(app);

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

// Save our port
var port = process.env.PORT || 8000;

// Start the server and listen on port 
app.listen(port,function(){
  console.log("Live on port: " + port);
});
