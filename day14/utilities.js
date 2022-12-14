const SAND_COORDS = [500, 0];

const parseInput = (input) => {
	return input.map((path) =>
		path.split(' -> ').map((coords) => {
			const [x, y] = coords.split(',');

			return [+x, +y];
		})
	);
};

const buildCave = (caveCoords, x, y) => {
	const map = [];

	for (const path of caveCoords) {
		let prevX, prevY;
		let firstPoint = true;
		for (const [toX, toY] of path) {
			if (firstPoint) {
				firstPoint = false;
			} else {
				let xA = prevX < toX ? prevX : toX;
				let xB = prevX < toX ? toX : prevX;
				let yA = prevY < toY ? prevY : toY;
				let yB = prevY < toY ? toY : prevY;
				for (x = xA; x <= xB; x++) {
					for (y = yA; y <= yB; y++) {
						if (!map[y]) map[y] = [];
						map[y][x] = '#';
					}
				}
			}
			prevX = toX;
			prevY = toY;
		}
	}
	return map;
};

const simulateSand = (map, ground) => {
	let restingSand = 0;
	while (true) {
		const sand = [SAND_COORDS[0], SAND_COORDS[1]];
		while (true) {
			if (ground && sand[1] === ground) {
				restingSand++;
				if (!map[sand[1]]) map[sand[1]] = [];
				map[sand[1]][sand[0]] = 'o';
				break;
			}
			const nextY = map[sand[1] + 1];
			const down = nextY && nextY[sand[0]];
			if (!down) {
				sand[1]++;
				if (sand[1] > map.length) return restingSand;
				continue;
			}
			const downLeft = nextY[sand[0] - 1];
			if (!downLeft) {
				sand[1]++;
				sand[0]--;
				continue;
			}
			const downRight = nextY[sand[0] + 1];
			if (!downRight) {
				sand[1]++;
				sand[0]++;
				continue;
			}
			restingSand++;
			if (sand[0] === SAND_COORDS[0] && sand[1] === SAND_COORDS[1]) {
				return restingSand;
			}
			if (!map[sand[1]]) map[sand[1]] = [];
			map[sand[1]][sand[0]] = 'o';
			break;
		}
	}
};

module.exports = {
	parseInput,
	buildCave,
	simulateSand,
};
