const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('index page', () => {
	const options = {
		url: 'http://localhost:7865',
		method: 'GET',
	};

	it('check correct status code', () => new Promise((done) => {
		request(options, (err, res, body) => {
			expect(res.statusCode).to.equal(200);
			done();
		})
	}));

	it('check correct content', () => new Promise((done) => {
		request(options, (err, res, body) => {
			expect(body).to.contain('Welcome to the payment system');
			done();
		});
	}));

	it('check correct content length', () => new Promise((done) => {
		request(options, (err, res, body) => {
			expect(res.headers['content-length']).to.equal('29');
			done();
		});
	}));
});
