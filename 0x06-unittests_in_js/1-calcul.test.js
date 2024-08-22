const assert = require('assert');
const calculateNumber = require('./1-caclcul');


describe('CalculateNumber', function () {
	describe('SUM', () => {
		it('should round both numbers and return their sum', () => {
			assert.strictEqual(calculateNumber('SUM', 4.6, 5.3), 10);
			assert.equal(calculateNumber('SUM', -1.4, -3.8), -5);
		});
	})

	describe('SUBTRACT', () => {
		it('Should round numbers and subtract', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 5.3), 0);
			assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.8), 3)
		})
	})

	describe('DIVIDE', () => {
		it('Should round integers and divide them', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 4.6, 5.3), 1);
			assert.strictEqual(calculateNumber('DIVIDE', -1.4, -3.8), 0.25);
		})

		it('Should return "Error" if the rounded value of b is zero', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
		})
	})
	describe('Invalid type', () => {
		it('should throw an error when an invalid type is passed', () => {
		  assert.throws(() => {
			calculateNumber('INVALID', 1.4, 3.8);
		  }, /Invalid type/);
		});
	  });
})
