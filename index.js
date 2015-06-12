'use strict';

var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hello, World\n');
}).listen(process.env.PORT || 5000, '0.0.0.0');
