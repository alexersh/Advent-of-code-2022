const { input, testInput } = require('./input');
const { parseInput, simulateMonkeysPt1 } = require('./utilities');

const calculateResult = (input) => {
	const monkeys = parseInput(input);

	const result = simulateMonkeysPt1(monkeys, 20);

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
