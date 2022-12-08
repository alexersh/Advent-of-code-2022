const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().trim().split('\r\n');
const testInput = fs.readFileSync(path.join(__dirname, 'testInput.txt'), 'utf-8').toString().trim().split('\r\n');

module.exports = {
	input,
	testInput,
};
