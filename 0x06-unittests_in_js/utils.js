const calculateNumber = require("./1-calcul");

const Utils = {
	calculateNumber (type, a, b) {
		const roundA = Math.round(a);
		const roundB = Math.round(b);

		switch(type) {
			case 'SUM':
				return roundA + roundB;
			case 'SUBTRACT':
				return roundA - roundB;
			case 'DIVIDE':
				return roundB === 0 ? 'Error' : roundA / roundB;
		}
	}
}

module.exports = Utils
