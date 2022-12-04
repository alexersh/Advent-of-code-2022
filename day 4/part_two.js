const { input } = require('./input.js');

const isRangesOverlaps = (r1, r2) => {
	return +r1[1] >= +r2[0] && +r1[1] <= +r2[1];
};

const isOverlaps = (data) => {
	const [elfOne, elfTwo] = data.split(',').map((ids) => ids.split('-'));

	return isRangesOverlaps(elfOne, elfTwo) || isRangesOverlaps(elfTwo, elfOne);
};

const calculateResult = () => {
	return input.reduce((result, data) => result + isOverlaps(data), 0);
};

console.log(calculateResult());
