const parseInput = (input) => {
	return input.map((line) => {
		const sensorX = line.match(/Sensor at x=(-?\d+)/)[1];
		const sensorY = line.match(/, y=(-?\d+): /)[1];
		const beaconX = line.match(/beacon is at x=(-?\d+)/)[1];
		const beaconY = line.match(/, y=(-?\d+)$/)[1];

		return {
			sensor: { x: +sensorX, y: +sensorY },
			beacon: { x: +beaconX, y: +beaconY },
		};
	});
};

const manhattanDistance = (x1, x2, y1, y2) => {
	return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

module.exports = {
	parseInput,
	manhattanDistance,
};
