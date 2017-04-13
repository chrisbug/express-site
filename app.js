var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: false}));

app.get('/', function(req,res){
  res.send('<h1>Hello world</h1>')
  console.log('Hello world');
});

app.listen(3000);
console.log('Server is running on port 3000');
