const { input } = require('./input.js');

const testInput = ['2-4,6-8', '2-3,4-5', '5-7,7-9', '2-8,3-7', '6-6,4-6', '2-6,4-8'];

const isOvelaps = (elfOne, elfTwo) => {
	if (+elfOne[1] >= +elfTwo[0] && +elfOne[1] <= +elfTwo[1]) {
		return true;
	}
	if (+elfTwo[1] >= +elfOne[0] && +elfTwo[1] <= +elfOne[1]) {
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
