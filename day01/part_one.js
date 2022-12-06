const { calculateSums } = require('./utilities');

const calculateResult = () => {
	const resultArray = calculateSums();

	return resultArray[0];
};

console.log(calculateResult());
