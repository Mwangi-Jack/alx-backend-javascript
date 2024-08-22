const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('CalculateNumber', function () {
	it('should round both numbers and return their sum', () => {
		assert.equal(calculateNumber(4.6, 5.3), 10);
		assert.equal(calculateNumber(1.4, 3.8), 5);
	  });

	  it('should round negative numbers and return their sum', () => {
		assert.equal(calculateNumber(-1.4, -3.8), -5);
		assert.equal(calculateNumber(-1.5, -1.5), -2);
	  });

	  it('should round numbers to the nearest integer and handle edge cases', () => {
		assert.equal(calculateNumber(1.5, 2.5), 5); // both round up
		assert.equal(calculateNumber(2.1, 3.1), 5); // both round down
		assert.equal(calculateNumber(0.5, 0.5), 2); // both round up
	  });

	  it('should handle cases where one number is an integer', () => {
		assert.equal(calculateNumber(2, 5.6), 8); // only b rounds up
		assert.equal(calculateNumber(4.2, 3), 7); // only a rounds down
	  });
})
