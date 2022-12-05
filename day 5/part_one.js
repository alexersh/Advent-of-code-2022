const { input, testinput } = require('./input.js');
const { parseInput, doMove, calcResultString } = require('./utils');

const calculateResult = (input) => {
	const { crates, moves } = parseInput(input);

	moves.forEach((move) => doMove(crates, move));

	const result = calcResultString(crates);

	return result;
};

console.log('test: ', calculateResult(testinput));
console.log('part_2: ', calculateResult(input));
