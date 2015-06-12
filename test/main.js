'use strict';

var assert = require('assert');
var request = require('request');

require('../index');

/* global describe, it */

describe('main', function() {
	it('replies with hello world\\n', function(done) {
		request('http://localhost:8080', function(error, response, body) {
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
