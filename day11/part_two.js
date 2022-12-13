const { input, testInput } = require('./input');
const { parseInput, simulateMonkeysPt2 } = require('./utilities');

const calculateResult = (input) => {
	const monkeys = parseInput(input);

	const result = simulateMonkeysPt2(monkeys, 10000);

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_two: ', calculateResult(input));
