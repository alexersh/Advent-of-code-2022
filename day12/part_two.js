const { input, testInput } = require('./input');
const { parseInput, findPath } = require('./utilities');

const calculateResult = (input) => {
	const parsedInput = parseInput(input);
	let end = null;
	for (let y = 0; y < parsedInput.length; y++) {
		for (let x = 0; x < parsedInput[y].length; x++) {
			if (parsedInput[y][x] === 'E') {
				end = [x, y];
				break;
			}
		}
	}
	let start = null;
	let shortestPath = Infinity;
	for (let y = 0; y < parsedInput.length; y++) {
		for (let x = 0; x < parsedInput[y].length; x++) {
			if (parsedInput[y][x] === 'S' || input[y][x] === 'a') {
				start = [x, y];
				try {
					const pathLength = findPath(parsedInput, ...start, ...end).length;
					if (pathLength > 0 && pathLength < shortestPath) shortestPath = pathLength;
				} catch (_error) {
					// Okay, keep trying paths
				}
			}
		}
	}
	return shortestPath.toString();
};

console.log('test: ', calculateResult(testInput));
console.log('part_two: ', calculateResult(input));
