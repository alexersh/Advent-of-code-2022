const { input } = require('./input.js');

const isRangesOverlaps = (r1, r2) => {
	return +r1[1] >= +r2[0] && +r1[1] <= +r2[1];
};

const isOvelaps = (elfOne, elfTwo) => {
	if (isRangesOverlaps(elfOne, elfTwo)) {
		return true;
	}
	if (isRangesOverlaps(elfTwo, elfOne)) {
		return true;
	}
	return false;
};

const calculateResult = (data) => {
	const [elfOne, elfTwo] = data.split(',').map((ids) => ids.split('-'));

	if (isOvelaps(elfOne, elfTwo)) {
		result += 1;
	}
};

let result = 0;

input.forEach((data) => calculateResult(data));

console.log(result);
