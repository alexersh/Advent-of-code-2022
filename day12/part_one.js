const { input, testInput } = require('./input');

const calculateResult = (input) => {
	const parsedInput = parseInput(input);
	let start = null;
	let end = null;
	for (let y = 0; y < parsedInput.length; y++) {
		for (let x = 0; x < parsedInput[y].length; x++) {
			if (parsedInput[y][x] === 'S') {
				start = [x, y];
			}
			if (parsedInput[y][x] === 'E') {
				end = [x, y];
			}
			if (start && end) {
				return findPath(parsedInput, ...start, ...end).length.toString();
			}
		}
	}
	throw 'start and end points not found!';
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
