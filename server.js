const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
app.use(express.static('website'));
app.use(express.static('node-modules'));

/* app.get('/', function (req, res) {
  res.send('Hello World!')
});
app.get('/lasla', function (req, res) {
  res.send('Hello World!')
});
	var nimi;
app.get('/nakki', function (req, res) {
	console.log(req.query);
	nimi = req.query.firstname;
	console.log(nimi);
});
app.get('/nimi', function (req, res) {
	res.send(nimi);
}); */
	var koodi;
	var koodiDB = {
		/*
		[token]: "koodi"
		*/
	};
	
app.post('/save', function (req, res) {
	console.log(req.body);
	koodi = req.body.code;
	console.log(koodi);
	var token;
	if (req.body.token) {
		token = req.body.token;
	
	} else {
		token = tokenGenerator(16, "abcdefghijklmnopqrstuwxyz");
	}
	koodiDB[token] = koodi;
	res.status(200).send(token);
	
});

app.get('/load', function (req, res) {
	/*koodiDB[token];*/
	var codes = [];
	for (var token in koodiDB) {
		codes.push(koodiDB[token]);
	}
	res.send({codes: codes, mycode: koodiDB[req.query.token]});
});

app.listen(3000, function () {
  console.log('Koodikangas listening on port 3000!')
});



function tokenGenerator (length, chars) {
	var token = "";
	for (i = length; i > 0; i--) {
		token += chars[Math.floor (Math.random() * chars.length)]; 
	} 
	return token;
}