const { input } = require('./input');

const resultArray = [];

(() => {
	let tempSumm = 0;

	input.forEach(data => {
		if (isNaN(data)) {
			resultArray.push(tempSumm);
			tempSumm = 0;
			return;
		}
		tempSumm += data;
	});
	resultArray.sort().reverse();
})();

console.log(Math.max(...resultArray));

module.exports = {
	resultArray,
};
