const { input } = require('./input.js');
const { calculatePointsForLetter, isIncludes } = require('./utilities.js');

let result = 0;

const calculateResult = (item) => {
	for (const letter of item[0]) {
		if (isIncludes(item[1], letter)) {
			result += calculatePointsForLetter(letter);
			break;
		}
	}
};

const parseInput = () => {
	return input.map((data) => [data.slice(0, data.length / 2), data.slice(data.length / 2)]);
};

const parsedInput = parseInput();

parsedInput.forEach((item) => calculateResult(item));

console.log(result);
