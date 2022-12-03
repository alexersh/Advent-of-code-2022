const { input } = require('./input.js');

// a-z 97 - 122 should be 1 - 26
// A-Z 65 - 90 should be 27 - 52
const calculatePointsForLetter = (letter) => {
	return letter.toUpperCase() === letter ? letter.charCodeAt(0) - 38 : letter.charCodeAt(0) - 96;
};

const isIncludes = (string, substring) => {
	if (string.indexOf(substring) !== -1) {
		return true;
	}
	return false;
};

const calculateResult = (item) => {
	for (const letter of item[0]) {
		if (isIncludes(item[1], letter)) {
			result += calculatePointsForLetter(letter);
			break;
		}
	}
};

const parsedInput = input.map((data) => {
	return [data.slice(0, data.length / 2), data.slice(data.length / 2)];
});

let result = 0;

parsedInput.forEach((item) => calculateResult(item));

console.log(result);

module.exports = {
	calculatePointsForLetter,
	isIncludes,
};
