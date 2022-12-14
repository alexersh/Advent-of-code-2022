const { input, testInput } = require('./input');
const { parseInput, buildCave, simulateSand } = require('./utilities');

const calculateResult = (input) => {
	const caveCoords = parseInput(input);

	const map = buildCave(caveCoords);

	const result = simulateSand(map, null);

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
