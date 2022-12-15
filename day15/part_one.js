const { input, testInput } = require('./input');
const { parseInput, manhattanDistance } = require('./utilities');

const calculateResult = (input) => {
	const parsedInput = parseInput(input);

	const targetRow = input.length < 20 ? 10 : 2000000;
	const map = new Map();

	for (const { sensor, beacon } of parsedInput) {
		const distance = manhattanDistance(sensor.x, beacon.x, sensor.y, beacon.y);

		for (x = sensor.x - distance; x <= sensor.x + distance; x++) {
			const y = targetRow;
			const thisDistance = manhattanDistance(sensor.x, x, sensor.y, y);

			if (thisDistance > distance) continue;

			if (!map.has(y)) map.set(y, new Map());
			map.get(y).set(x, map.get(y).get(x) || '#');
		}
		if (!map.has(sensor.y)) map.set(sensor.y, new Map());
		if (!map.has(beacon.y)) map.set(beacon.y, new Map());
		map.get(sensor.y).set(sensor.x, 'S');
		map.get(beacon.y).set(beacon.x, 'B');
	}
	let result = 0;

	for (const [, value] of map.get(targetRow)) {
		if (value === '#') result++;
	}

	return result;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
