const path = require('path');
const fs = require('fs');

const testinput = fs.readFileSync(path.join(__dirname, 'testinput.txt'), 'utf8').toString().trim().split('');
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().trim().split('');

module.exports = {
	input,
	testinput,
};
