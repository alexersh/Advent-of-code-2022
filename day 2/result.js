const { input } = require('./input.js');

const OpponentsHandMap = {
	A: 'rock',
	B: 'paper',
	C: 'scissors',
};

const MyHandMapPt1 = {
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

const calculatePoints = (shape, resultPoints) => {
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

// Part one
let myPoints = 0;

input.forEach((game) => {
	const [p1, p2] = game.toString().split(' ');

	calculateWinner(OpponentsHandMap[p1], MyHandMapPt1[p2]);
});
console.log(myPoints);

// Part two
const MyHandMapPt2 = {
	X: 'lose',
	Y: 'draw',
	Z: 'win',
};

const calculateRightShape = (oppHand, needTo) => {
	const oppHandIndex = choices.indexOf(OpponentsHandMap[oppHand]);

	const isFirshElement = oppHandIndex === 0;
	const isLastElement = oppHandIndex === choices.length - 1;

	switch (needTo) {
		case 'lose': {
			return isFirshElement ? choices[choices.length - 1] : choices[oppHandIndex - 1];
		}
		case 'win': {
			return isLastElement ? choices[0] : choices[oppHandIndex + 1];
		}
		// Draw
		default: {
			return OpponentsHandMap[oppHand];
		}
	}
};

myPoints = 0;

input.forEach((game) => {
	const [p1, p2] = game.toString().split(' ');

	const opponentsHand = OpponentsHandMap[p1];
	const myHand = calculateRightShape(p1, MyHandMapPt2[p2]);

	calculateWinner(opponentsHand, myHand);
});

console.log(myPoints);
