const { input, testInput } = require('./input');
const { isVisible } = require('./utilities');

const parseInput = (input) => {
	return input.map((line) => line.split('').map((num) => parseInt(num)));
};

const calculateResult = (input) => {
	const forest = parseInput(input);

	const result = forest.reduce((sum, row, x) => {
		return sum + row.reduce((sum, tree, y) => sum + isVisible(forest, x, y, tree), 0);
	}, 0);

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
