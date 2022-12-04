const { input } = require('./input.js');

const isIncludes = (elfOne, elfTwo) => {
	if (+elfOne[0] >= +elfTwo[0] && +elfOne[1] <= +elfTwo[1]) {
		return true;
	}
	if (+elfTwo[0] >= +elfOne[0] && +elfTwo[1] <= +elfOne[1]) {
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
