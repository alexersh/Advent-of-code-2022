const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.split('\n')
	.map(num => parseInt(num, 10));

console.log(input);

module.exports = {
	input,
};
