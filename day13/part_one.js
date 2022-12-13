const { input, testInput } = require('./input');
const { parseInput, compareValues } = require('./utilities');

const calculateResult = (input) => {
	const parsedInput = parseInput(input);

	console.log(parsedInput);

	let result = 0;

	for (let p = 0; p < parsedInput.length; p++) {
		if (compareValues(...parsedInput[p]) === -1) {
			result += p + 1;
		}
	}

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
