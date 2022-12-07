const { input, testInput } = require('./input');
const { parseInput, getDirSizes } = require('./utilities');

const MAX_SIZE = 100000;

const calculateResult = (input) => {
	const fileSystem = parseInput(input);

	const result = getDirSizes('/', fileSystem)
		.filter(([_, size]) => size <= MAX_SIZE)
		.map(([_, size]) => size)
		.reduce((summ, curr) => summ + curr, 0);

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
