const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').trim().split('\n');
const testInput1 = fs.readFileSync(path.join(__dirname, 'testInput1.txt'), 'utf-8').trim().split('\n');
const testInput2 = fs.readFileSync(path.join(__dirname, 'testInput2.txt'), 'utf-8').trim().split('\n');

module.exports = {
	input,
	testInput1,
	testInput2,
};
