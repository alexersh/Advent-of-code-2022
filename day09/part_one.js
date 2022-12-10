const { input, testInput1 } = require('./input');
const { parseInput, simulateRope } = require('./utilities');

const calculateResult = (input) => {
	const parsed = parseInput(input);
	const tailGrids = simulateRope(parsed, 1);

	return tailGrids;
};

console.log('test: ', calculateResult(testInput1));
console.log('part_one: ', calculateResult(input));
