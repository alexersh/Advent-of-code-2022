const parseInput = (input) => {
	return input.map((line) => line.split(''));
};
const TILES = 'abcdefghijklmnopqrstuvwxyz'.split('');

const gridKey = (x, y) => `${x}:${y}`;

const getLowestHGrid = (list) => {
	let best;
	for (const [, value] of list) {
		if (!best || value.h < best.h) {
			best = value;
		}
	}
	return best;
};

const constructPath = (startX, startY, from, grids) => {
	const path = [];
	let current = from;
	let panic = 100000;
	while (panic > 0) {
		panic--;
		if (current.x === startX && current.y == startY) {
			break;
		}
		path.push(current.grid);
		current = grids.get(current.parent);
	}
	return path;
};

const findPath = (map, startX, startY, endX, endY) => {
	let current = {
		x: startX,
		y: startY,
		grid: gridKey(startX, startY),
		h: 0,
		parent: null,
		tile: 'a',
	};
	const openGrids = new Map([[current.grid, current]]);
	const closedGrids = new Map();
	while (openGrids.size > 0) {
		closedGrids.set(current.grid, current);
		openGrids.delete(current.grid);
		if (current.x === endX && current.y === endY) {
			return constructPath(startX, startY, current, closedGrids);
		}
		for (const [nx, ny] of [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		]) {
			const neighbor = {
				parent: current.grid,
				x: current.x + nx,
				y: current.y + ny,
				grid: gridKey(current.x + nx, current.y + ny),
				h: 0,
				tile: '',
			};
			if (closedGrids.has(neighbor.grid)) {
				continue;
			}
			if (!map[neighbor.y] || !map[neighbor.y][neighbor.x]) {
				continue;
			}
			neighbor.tile = map[neighbor.y][neighbor.x];
			if (neighbor.tile === 'E') neighbor.tile = 'z';
			if (neighbor.tile === 'S') neighbor.tile = 'a';
			if (TILES.indexOf(neighbor.tile) - TILES.indexOf(current.tile) > 1) {
				continue;
			}
			neighbor.h += 1;
			const existing = openGrids.get(neighbor.grid);
			if (existing) {
				if (existing.h > neighbor.h) {
					existing.h = neighbor.h;
					existing.parent = current.grid;
				}
			} else {
				openGrids.set(neighbor.grid, neighbor);
			}
		}
		current = getLowestHGrid(openGrids);
	}
	throw 'no path found';
};

module.exports = {
	parseInput,
	findPath,
};
