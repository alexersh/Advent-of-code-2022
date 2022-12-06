const { input, testinput } = require('./input.js');
const { findUniqueCharsPosition } = require('./utilities');

console.log('test: ', findUniqueCharsPosition(testinput, 14).toString());
console.log('part_2: ', findUniqueCharsPosition(input, 14).toString());
