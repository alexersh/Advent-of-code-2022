const parseInput = (input) => {
	return input.map((pair) => {
		const [packet1, packet2] = pair.split('\n').map((p) => JSON.parse(p));
		return [packet1, packet2];
	});
};

const compareValues = (a, b) => {
	if (!Array.isArray(a) && !Array.isArray(b)) {
		// Both are integers
		if (a < b) return -1;
		if (b < a) return 1;
		return 0;
	}
	if (!Array.isArray(b)) b = [b];
	if (!Array.isArray(a)) a = [a];
	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		if (i + 1 > a.length) return -1;
		else if (i + 1 > b.length) return 1;
		const result = compareValues(a[i], b[i]);
		if (result !== 0) return result;
	}
	return 0;
};

module.exports = {
	parseInput,
	compareValues,
};
