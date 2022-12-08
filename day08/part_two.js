const { input, testInput } = require('./input');
const { calculateScenicScore } = require('./utilities');

const parseInput = (input) => {
	return input.map((line) => line.split('').map((num) => parseInt(num)));
};

const calculateResult = (input) => {
	const forest = parseInput(input);

	const scenicScores = [];

	forest.forEach((row, x) => {
		row.forEach((tree, y) => {
			scenicScores.push(calculateScenicScore(forest, x, y, tree));
		});
	});

	const result = scenicScores.sort((a, b) => b - a)[0];

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_two: ', calculateResult(input));
