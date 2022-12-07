const { input, testInput } = require('./input');
const { parseInput, getDirSizes } = require('./utilities');

const STORAGE_SIZE = 70000000;
const NEEDED_SIZE = 30000000;

const calculateResult = (input) => {
	const fileSystem = parseInput(input);

	const dirSizes = getDirSizes('/', fileSystem).sort(([_, a], [__, b]) => b - a);
	// dirSizes[0][1] is a sum of all directories
	const freeSpace = STORAGE_SIZE - dirSizes[0][1];
	const neededSpace = NEEDED_SIZE - freeSpace;

	const result = dirSizes.reverse().find(([_dir, size]) => size >= neededSpace)[1];

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_two: ', calculateResult(input));
