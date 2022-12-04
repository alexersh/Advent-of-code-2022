const { calculateSums } = require('./utilities');

const calculateResult = () => {
	const resultArray = calculateSums();

	return resultArray[0] + resultArray[1] + resultArray[2];
};

console.log(calculateResult());
