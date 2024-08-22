const assert = require('assert');
const calculateNumber = require('./1-caclcul');


describe('CalculateNumber', function () {
	describe('SUM', () => {
		it('should round both numbers and return their sum', () => {
			assert.equal(calculateNumber('SUM', 4.6, 5.3), 10);
			assert.equal(calculateNumber('SUM', 1.4, 3.8), 5);
		});

		it('should round negative numbers and return their sum', () => {
		assert.equal(calculateNumber('SUM', -1.4, -3.8), -5);
		assert.equal(calculateNumber('SUM', -1.5, -1.5), -2);
		});

		it('should round numbers to the nearest integer and handle edge cases', () => {
		assert.equal(calculateNumber('SUM', 1.5, 2.5), 5);
		assert.equal(calculateNumber('SUM', 2.1, 3.1), 5);
		assert.equal(calculateNumber('SUM', 0.5, 0.5), 2);
		});

		it('should handle cases where one number is an integer', () => {
		assert.equal(calculateNumber('SUM', 2, 5.6), 8);
		assert.equal(calculateNumber('SUM', 4.2, 3), 7);
		});
	})

	describe('SUBTRACT', () => {
		it('Should round both numbers and subtract', () => {
			assert.equal(calculateNumber('SUBTRACT', 4.6, 5.3), 0);
			assert.equal(calculateNumber('SUBTRACT', 1.4, 3.8), -3);
		})
		it('should round negative numbers and return their subtraction', () => {
			assert.equal(calculateNumber('SUBTRACT', -1.4, -3.8), 3);
			assert.equal(calculateNumber('SUBTRACT', -1.5, -1.5), 0);
		});
		it('should round numbers to the nearest integer and handle edge cases', () => {
			assert.equal(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
			assert.equal(calculateNumber('SUBTRACT', 2.1, 3.1), -1);
			assert.equal(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
		});
		it('should handle cases where one number is an integer', () => {
			assert.equal(calculateNumber('SUBTRACT', 2, 5.6), -4);
			assert.equal(calculateNumber('SUBTRACT', 4.2, 3), 1);
		});

	})

	describe('DIVIDE', () => {
		it('Should round both numbers and divide', () => {
			assert.equal(calculateNumber('DIVIDE', 4.6, 5.3), 1);
			assert.equal(calculateNumber('DIVIDE', 1.4, 3.8), 0.25);
		})
		it('should round negative numbers and return their division', () => {
			assert.equal(calculateNumber('DIVIDE', -1.4, -3.8), 0.25);
			assert.equal(calculateNumber('DIVIDE', -1.5, -1.5), 1);
		});
		it('should round numbers to the nearest integer and handle edge cases', () => {
			assert.equal(calculateNumber('DIVIDE', 1.5, 2.5), 0.6666666666666666);
			assert.equal(calculateNumber('DIVIDE', 2.1, 3.1), 0.6666666666666666);
			assert.equal(calculateNumber('DIVIDE', 0.5, 0.5), 1);
		});
		it('should handle cases where one number is an integer', () => {
			assert.equal(calculateNumber('DIVIDE', 2, 5.6), 0.3333333333333333);
			assert.equal(calculateNumber('DIVIDE', 4.2, 3), 1.3333333333333333);
		});
	})
	describe('Invalid type', () => {
		it('should throw an error when an invalid type is passed', () => {
		  assert.throws(() => {
			calculateNumber('INVALID', 1.4, 3.8);
		  }, /Invalid type/);
		});
	  });
})
