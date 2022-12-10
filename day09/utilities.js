const parseInput = (input) =>
	input.map((v) => {
		const [dir, steps] = v.split(' ');
		return [dir, +steps];
	});

const simulateRope = (input, tailKnots) => {
	const head = [0, 0];
	const tails = [];
	for (let t = 0; t < tailKnots; t++) {
		tails.push([0, 0]);
	}
	const tailGrids = new Set(['0:0']);
	for (const [dir, steps] of input) {
		for (let s = 0; s < steps; s++) {
			switch (dir) {
				case 'L':
					head[0]--;
					break;
				case 'R':
					head[0]++;
					break;
				case 'U':
					head[1]--;
					break;
				case 'D':
					head[1]++;
					break;
			}
			for (let t = 0; t < tails.length; t++) {
				const follow = t === 0 ? head : tails[t - 1];
				const hDist = follow[0] - tails[t][0];
				const vDist = follow[1] - tails[t][1];
				if (Math.abs(hDist) > 1 || Math.abs(vDist) > 1) {
					tails[t][0] += Math.max(-1, Math.min(1, hDist));
					tails[t][1] += Math.max(-1, Math.min(1, vDist));
					if (t === tails.length - 1) tailGrids.add(tails[t].join(':'));
				}
			}
		}
	}
	return tailGrids.size;
};

module.exports = {
	parseInput,
	simulateRope,
};
