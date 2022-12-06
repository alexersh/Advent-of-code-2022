const { input } = require('./input');

const calculateSums = () => {
	const array = [];

	let tempSumm = 0;

	input.forEach((data) => {
		if (isNaN(data)) {
			array.push(tempSumm);
			tempSumm = 0;
			return;
		}
		tempSumm += data;
	});

	return array.sort().reverse();
};

module.exports = {
	calculateSums,
};
