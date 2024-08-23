function calculateNumber(type, a, b,) {
	const roundA = Math.round(a);
	const roundB = Math.round(b);
	if (type === 'SUM') {
		return roundA + roundB;
	  } else if (type === 'SUBTRACT') {
		return roundA - roundB;
	  } else if (type === 'DIVIDE') {
		return roundB === 0 ? 'Error' : roundA / roundB
	  }
}

module.exports = calculateNumber;
