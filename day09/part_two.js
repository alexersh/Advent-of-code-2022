const { input, testInput2 } = require('./input');
const { parseInput, simulateRope } = require('./utilities');

const calculateResult = (input) => {
	const parsed = parseInput(input);
	const tailGrids = simulateRope(parsed, 9);

	return tailGrids;
};

console.log('test: ', calculateResult(testInput2));
console.log('part_two: ', calculateResult(input));
