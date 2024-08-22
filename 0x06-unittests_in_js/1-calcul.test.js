const assert = require('assert');
const calculateNumber = require('./1-caclcul');


describe('CalculateNumber', function () {
	it('should round both numbers and return their sum', () => {
		assert.equal(calculateNumber('SUM', 4.6, 5.3), 10);
		assert.equal(calculateNumber('SUM', 1.4, 3.8), 5);
	});
	it('Should round numbers and subtract', () => {
		assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
		assert.equal(calculateNumber('SUBTRACT', -1.5, -4.2), 3)
	})

	it('Should round integers and divide them', () => {
		assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		assert.equal(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
	})
	it('Should return "Error" if the rounded value of b is zero', () => {
		assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	})

})
