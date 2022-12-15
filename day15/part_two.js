const { input, testInput } = require('./input');
const { parseInput, manhattanDistance } = require('./utilities');

const calculateResult = (input) => {
	const parsedInput = parseInput(input);

	const maxCoord = input.length < 20 ? 20 : 4000000;
	const sensors = parsedInput.map(({ sensor, beacon }) => {
		return { sensor, range: manhattanDistance(sensor.x, beacon.x, sensor.y, beacon.y) };
	});

	for (const { sensor, range } of sensors) {
		// start at top
		const check = { x: sensor.x, y: sensor.y - range - 1 };

		const dir = { x: 1, y: 1 };

		while (true) {
			if (check.x > sensor.x && check.y === sensor.y) {
				dir.x = -1;
			} else if (check.x === sensor.x && check.y > sensor.y) {
				dir.y = -1;
			} else if (check.x < sensor.x && check.y === sensor.y) {
				dir.x = 1;
			} else if (dir.y === -1 && check.x === sensor.x && check.y === sensor.y - range - 1) {
				break;
			} else if (check.x < 0 || check.y < 0) {
				break;
			} else if (!(check.x > maxCoord || check.y > maxCoord)) {
				let valid = true;
				for (const otherSensor of sensors) {
					if (otherSensor.sensor === sensor) continue;
					const distance = manhattanDistance(check.x, otherSensor.sensor.x, check.y, otherSensor.sensor.y);
					if (distance <= otherSensor.range) {
						valid = false;
						break;
					}
				}
				if (valid) return check.x * 4000000 + check.y;
			}
			check.x += dir.x;
			check.y += dir.y;
		}
	}
};

console.log('test: ', calculateResult(testInput));
console.log('part_two: ', calculateResult(input));
