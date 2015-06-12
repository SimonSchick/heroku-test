'use strict';

var assert = require('assert');
var request = require('request');

/* global describe, it, before, after */

var spawn = require('child_process').spawn;

var subProcess;

before(function(done) {
	subProcess = spawn('node', 'index', { stdio: 'inherit' });
	subProcess.on('error', done);
	setTimeout(done, 1000);


	subProcess.stdout.on('data', function (data) {
	  console.log('stdout: ' + data);
	});

	subProcess.stderr.on('data', function (data) {
	  console.log('stderr: ' + data);
	});

	subProcess.on('close', function (code) {
	  console.log('child process exited with code ' + code);
	});
});

after(function () {
	subProcess.kill();
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
