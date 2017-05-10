var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 3004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', function (req, res) {
	params = {
		'res': res,
		'req': req
	};
	return returnMessage(params, 200, { 'success': 'OK' })
})

app.post('/login', function (req, res) {
	params = {
		'res': res,
		'req': req
	};
	return returnMessage(params, 200, { 'success': 'OK' })
})

app.listen(port, function (error) {
	if (error) {
		console.error(error)
	} else {
		console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	}
})

function returnMessage(params, returnCode, message) {
	if (params && params.res) {
		params.res.writeHead(returnCode, { 'Content-Type': 'application/json; charset=UTF-8', 'Access-Control-Allow-Origin': '*' });
		params.res.write(JSON.stringify({ result: message }));
		params.res.end();
	}
};
