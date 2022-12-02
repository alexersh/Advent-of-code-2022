const { input } = require('./input.js');
const { OpponentsHandMap, choices, calculateWinner } = require('./part_one');

const MyHandMap = {
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

input.forEach(game => {
	const [p1, p2] = game.toString().split(' ');

	const opponentsHand = OpponentsHandMap[p1];
	const myHand = calculateRightShape(p1, MyHandMap[p2]);

	calculateWinner(opponentsHand, myHand);
});
