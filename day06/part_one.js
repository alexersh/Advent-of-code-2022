const { input, testinput } = require('./input.js');
const { findUniqueCharsPosition } = require('./utilities');

console.log('test: ', findUniqueCharsPosition(testinput, 4).toString());
console.log('part_1: ', findUniqueCharsPosition(input, 4).toString());
