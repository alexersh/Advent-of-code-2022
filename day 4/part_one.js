const { input } = require('./input.js');

const isIncludesRange = (r1, r2) => {
	return +r1[0] >= +r2[0] && +r1[1] <= +r2[1];
};

const isIncludes = (elfOne, elfTwo) => {
	if (isIncludesRange(elfOne, elfTwo)) {
		return true;
	}
	if (isIncludesRange(elfTwo, elfOne)) {
		return true;
	}
	return false;
};

const calculateResult = (data) => {
	const [elfOne, elfTwo] = data.split(',').map((ids) => ids.split('-'));

	if (isIncludes(elfOne, elfTwo)) {
		result += 1;
	}
};

let result = 0;

input.forEach((data) => calculateResult(data));

console.log(result);
