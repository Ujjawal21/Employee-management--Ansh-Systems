var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var bodyParser = require('body-parser');
var fs = require("fs");
var mysql = require("mysql");

// // setup route middlewares
// var csrfProtection = csrf({ cookie: true })
// var parseForm = bodyParser.urlencoded({ extended: false })
//
// app.use(cookieParser())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "anshEmp"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.use('/bower_components', express.static('./bower_components'));
app.use('/scripts', express.static('./app/scripts'));
app.use('/styles', express.static('./app/styles'));
app.use('/views', express.static('./app/views'));


app.get('/', function(req, res) {
	res.sendFile(path.resolve('./app/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});
app.get('/listUsers', function (req, res) {
	con.connect(function(error){
		con.query('SELECT * FROM employees',function(err, rows){
		   if (err) {
			   console.log(err);
		   }

		   console.log('Data received from Db:\n');
		   console.log(rows);
		   res.json(rows);
		 });
	 });
});

app.get('/api/employee', function (req, res) {
	con.connect(function(error){
		con.query('SELECT * FROM employees where id = ?', [req.query.id],function(err, rows){
		   if (err) {
			   console.log(err);
		   }

		   console.log('Data received from Db:\n');
		   console.log(rows);
		   res.json(rows);
		 });
	 });
});

app.post('/api/employee', function (req, res) {
	con.connect(function(error){
		con.query('INSERT INTO employees SET ?', [req.query],function(err, rows){
		   if (err) {
			   console.log(err);
		   }

		   console.log('Data received from Db:\n');
		   console.log(rows);
		   res.json({rows: rows});
		 });
	 });
});

app.put('/api/employee', function (req, res) {
	con.connect(function(error){
		con.query('UPDATE employees SET name = ?, phone = ?, city = ?, ' +
				'address1 = ?, address2 = ?, postalCode = ? Where id = ?',
				[req.query.name, req.query.phone, req.query.city, req.query.address1,
				req.address2, req.query.postalCode, req.query.id],function(err, rows){
		   if (err) {
			   console.log(err);
		   }

		   console.log('Data received from Db:\n');
		   console.log(rows);
		   res.json({rows: rows});
		 });
	 });
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
