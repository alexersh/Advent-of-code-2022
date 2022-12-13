const { input, testInput } = require('./input');
const { parseInput, compareValues } = require('./utilities');

const calculateResult = (input) => {
	const parsedInput = parseInput(input);

	const flatPackets = [];
	for (const pair of parsedInput) {
		flatPackets.push(...pair);
	}
	const divider1 = [[2]];
	const divider2 = [[6]];
	flatPackets.push(divider1, divider2);
	flatPackets.sort(compareValues);

	const result = (flatPackets.indexOf(divider1) + 1) * (flatPackets.indexOf(divider2) + 1);

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_two: ', calculateResult(input));
