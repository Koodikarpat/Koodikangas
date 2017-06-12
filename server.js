const express = require('express');
const app = express();

app.use(express.static('website'));

app.get('/', function (req, res) {
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
});
	var koodi;
	var koodiarr = [];
app.get('/save', function (req, res) {
	console.log(req.query);
	koodi = req.query.code;
	console.log(koodi);
	
});
app.get('/savedcode', function (req, res) {
	koodiarr.push(koodi);
	res.send(koodiarr);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
