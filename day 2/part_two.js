const { input } = require('./input');
const { calculateWinner, calculateRightShape, OpponentsHandMap, MyHandMapPt2 } = require('./utilities');

const calculateResult = () => {
	return input.reduce((result, game) => {
		const [p1, p2] = game.toString().split(' ');

		const opponentsHand = OpponentsHandMap[p1];
		const myHand = calculateRightShape(p1, MyHandMapPt2[p2]);

		return result + calculateWinner(opponentsHand, myHand);
	}, 0);
};

console.log(calculateResult());
