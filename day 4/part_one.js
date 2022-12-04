const { input } = require('./input.js');

const isIncludesRange = (r1, r2) => {
	return +r1[0] >= +r2[0] && +r1[1] <= +r2[1];
};

const isIncludes = (data) => {
	const [elfOne, elfTwo] = data.split(',').map((ids) => ids.split('-'));

	return isIncludesRange(elfOne, elfTwo) || isIncludesRange(elfTwo, elfOne);
};

const calculateResult = () => {
	return input.reduce((result, data) => result + isIncludes(data), 0);
};

console.log(calculateResult());
