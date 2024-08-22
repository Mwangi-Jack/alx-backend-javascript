const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('CalculateNumber', function () {
	it('should round both numbers and return their sum', () => {
		assert.strictEqual(calculateNumber(4.6, 5.3), 10);
		assert.strictEqual(calculateNumber(1.4, 3.8), 5);
	  });

	  it('should round negative numbers and return their sum', () => {
		assert.strictEqual(calculateNumber(-1.4, -3.8), -5);
		assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
	  });

	  it('should round numbers to the nearest integer and handle edge cases', () => {
		assert.strictEqual(calculateNumber(1.5, 2.5), 5); // both round up
		assert.strictEqual(calculateNumber(2.1, 3.1), 5); // both round down
		assert.strictEqual(calculateNumber(0.5, 0.5), 2); // both round up
	  });

	  it('should handle cases where one number is an integer', () => {
		assert.strictEqual(calculateNumber(2, 5.6), 8); // only b rounds up
		assert.strictEqual(calculateNumber(4.2, 3), 7); // only a rounds down
	  });
})
