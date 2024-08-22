const assert = require('assert');
const calculateNumber = require('./1-caclcul');


describe('CalculateNumber', function () {
	it('Should round  integers and sum them', function () {
		assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
		assert.equal(calculateNumber('SUM', -1.5, -4.2),  -5);
	})
	it('Should round numbers and subtract', function () {
		assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
		assert.equal(calculateNumber('SUBTRACT', -1.5, -4.2), 3)
	})

	it('Should round integers and divide them', function() {
		assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		assert.equal(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
		assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	})

})
