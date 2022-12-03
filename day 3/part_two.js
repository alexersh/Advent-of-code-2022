const { input } = require('./input.js');
const { calculatePointsForLetter, isIncludes } = require('./part_one.js');

const calculateResult = (item) => {
	for (const letter of item[0]) {
		if (isIncludes(item[1], letter) && isIncludes(item[2], letter)) {
			result += calculatePointsForLetter(letter);
			break;
		}
	}
};

const parseInput = () => {
	const newArr = [];
	for (i = 0; i < input.length; i += 3) {
		newArr.push([input[i], input[i + 1], input[i + 2]]);
	}
	return newArr;
};

const parsedInput = parseInput();

let result = 0;

parsedInput.forEach((item) => calculateResult(item));

console.log(result);
