const { input } = require('./input.js');

const OpponentsHandMap = {
	A: 'rock',
	B: 'paper',
	C: 'scissors',
};

const MyHandMap = {
	X: 'rock',
	Y: 'paper',
	Z: 'scissors',
};

const PointsForShape = {
	rock: 1,
	paper: 2,
	scissors: 3,
};

const choices = ['rock', 'paper', 'scissors'];

let myPoints = 0;

const calculatePoints = (shape, resultPoints = 0) => {
	myPoints += PointsForShape[shape] + resultPoints;
};

const calculateWinner = (oppHand, myHand) => {
	const leftHandIndex = choices.indexOf(oppHand);
	const rightHandIndex = choices.indexOf(myHand);

	if (leftHandIndex === rightHandIndex) {
		calculatePoints(myHand, 3);
		return; // Draw
	}

	if (leftHandIndex == choices.length - 1 && rightHandIndex == 0) {
		calculatePoints(myHand, 6);
		return; // Right wins
	}

	if (rightHandIndex == choices.length - 1 && leftHandIndex == 0) {
		calculatePoints(myHand, 0);
		return; // Left wins
	}

	if (leftHandIndex > rightHandIndex) {
		calculatePoints(myHand, 0);
		return; // Left wins
	}
	// Right wins
	calculatePoints(myHand, 6);
	return;
};

input.forEach(game => {
	const [p1, p2] = game.toString().split(' ');

	return calculateWinner(OpponentsHandMap[p1], MyHandMap[p2]);
});

console.log(myPoints);

module.exports = {
	OpponentsHandMap,
	choices,
	calculateWinner,
};
