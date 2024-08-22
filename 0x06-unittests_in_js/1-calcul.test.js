const assert = require('assert');
const calculateNumber = require('./1-caclcul');


describe('calculateNumber', () => {
	describe('SUM', () => {
	  it('should round both numbers and return their sum', () => {
		assert.strictEqual(calculateNumber('SUM', 4.6, 5.3), 10);
		assert.strictEqual(calculateNumber('SUM', 1.4, 3.8), 5);
	  });
	});

	describe('SUBTRACT', () => {
	  it('should round both numbers and return the result of subtracting b from a', () => {
		assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 5.3), -1);
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.8), -3);
	  });
	});

	describe('DIVIDE', () => {
	  it('should round both numbers and return the result of dividing a by b', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 4.6, 2.3), 2);
		assert.strictEqual(calculateNumber('DIVIDE', 9.1, 3.4), 3);
	  });

	  it('should return "Error" when the rounded value of b is 0', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 4.6, 0.3), 'Error');
		assert.strictEqual(calculateNumber('DIVIDE', 5.3, 0.5), 'Error');
	  });
	});

  });
