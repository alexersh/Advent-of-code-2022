const { input, testInput } = require('./input');
const { parseInput, drawImage } = require('./utilities');

const calculateResult = (input) => {
	const parsedInput = parseInput(input);

	const result = drawImage(parsedInput);

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_two: ', calculateResult(input));
