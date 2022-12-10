const { input, testInput } = require('./input');
const { parseInput, doInstuctions } = require('./utilities');

const calculateResult = (input) => {
	const parsedInput = parseInput(input);

	const result = doInstuctions(parsedInput);

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
