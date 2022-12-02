import { input } from './input';

type TShapes = 'rock' | 'paper' | 'scissors';

enum OpponentsHandMap {
	A = 'rock',
	B = 'paper',
	C = 'scissors',
}

enum MyHandMap {
	X = 'rock',
	Y = 'paper',
	Z = 'scissors',
}

enum PointsForShape {
	rock = 1,
	paper = 2,
	scissors = 3,
}

let opponentsPoints = 0;
let myPoints = 0;

const choices: TShapes[] = ['rock', 'paper', 'scissors'];

const calculatePoints = (shape: TShapes, isMyHand: boolean, resultPoints: number) => {
	console.log(PointsForShape[shape] + resultPoints);
	isMyHand ? (myPoints += PointsForShape[shape] + resultPoints) : (opponentsPoints += PointsForShape[shape] + resultPoints);
};

const calculateWinner = (oppHand: TShapes, myHand: TShapes) => {
	const x = choices.indexOf(oppHand);
	const y = choices.indexOf(myHand);

	if (x === y) {
		calculatePoints(myHand, true, 3);
		return;
	}
	if (x == choices.length - 1 && y == 0) {
		calculatePoints(myHand, true, 6);
		return;
	}
	if (y == choices.length - 1 && x == 0) {
		return; // Left wins
	}
	if (x > y) {
		return; // Left wins
	} else {
		calculatePoints(myHand, true, 6);
		return;
	}
};

input.forEach((game: string) => {
	const [p1, p2] = game.split(' ');

	calculateWinner(OpponentsHandMap[p1 as keyof OpponentsHandMap], MyHandMap[p2 as keyof MyHandMap]);
});

// console.log(myPoints);
