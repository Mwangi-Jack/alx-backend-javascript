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

});


describe('cart page', () => {
	const options = {
		url: 'http://localhost:7865/cart/12',
		method: 'GET'
	}
	it('check correct status code for correct url', () => new Promise((done) => {
		request(options, (err, res, body) => {
			expect(res.statusCode).to.equal(200);
			done();
		});
	}));

	it('check correct content for correct url', () => new Promise((done) => {
		request(options, (err, res, body) => {
			expect(body).to.contain('Payment methods for cart 12');
			done();
		});
	}));

	it('check correct status code for incorrect url', () => new Promise((done) => {
		request.get('http://localhost:7865/NaN', (err, res, body) => {
			expect(res.statusCode).to.equal(404);
			done();
		});
	}));
});
