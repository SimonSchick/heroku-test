'use strict';

var assert = require('assert');
var request = require('request');

/* global describe, it, before, after */

var server;

before(function() {
	server = require('../index').server;
});

after(function() {
	server.close();
});

describe('main', function() {
	it('replies with hello world\\n', function(done) {
		request('http://localhost:' + (process.env.PORT || 5000), function(error, response, body) {
			if (error) {
				done(error);
				return;
			}
			assert.equal(response.statusCode, 200);
			assert.equal(body, 'Hello, World\n');
			assert.equal(response.headers['content-type'], 'text/plain');
			done();
		});
	});
});
