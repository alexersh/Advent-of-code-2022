const createMap = (keys, values = []) => {
	return keys.reduce((object, key, index) => ({ ...object, [key]: values[index] ?? index + 1 }), {});
};

const choices = ['rock', 'paper', 'scissors'];

const OpponentsHandKeys = ['A', 'B', 'C'];

const OpponentsHandMap = createMap(OpponentsHandKeys, choices);

const MyHandKeys = ['X', 'Y', 'Z'];

const MyHandMapPt1 = createMap(MyHandKeys, choices);

const MyHandValuesPt2 = ['lose', 'draw', 'win'];

const MyHandMapPt2 = createMap(MyHandKeys, MyHandValuesPt2);

const PointsForShapeMap = createMap(choices);

const calculatePoints = (shape, resultPoints) => {
	return PointsForShapeMap[shape] + resultPoints;
};

const calculateWinner = (oppHand, myHand) => {
	const leftHandIndex = choices.indexOf(oppHand);
	const rightHandIndex = choices.indexOf(myHand);

	// Draw
	if (leftHandIndex === rightHandIndex) {
		return calculatePoints(myHand, 3);
	}
	// Right wins
	if (leftHandIndex == choices.length - 1 && rightHandIndex == 0) {
		return calculatePoints(myHand, 6);
	}
	// Left wins
	if (rightHandIndex == choices.length - 1 && leftHandIndex == 0) {
		return calculatePoints(myHand, 0);
	}
	// Left wins
	if (leftHandIndex > rightHandIndex) {
		return calculatePoints(myHand, 0);
	}
	// Right wins
	return calculatePoints(myHand, 6);
};

const calculateRightShape = (oppHand, needTo) => {
	const oppHandIndex = choices.indexOf(OpponentsHandMap[oppHand]);

	const isFirshElement = oppHandIndex === 0;
	const isLastElement = oppHandIndex === choices.length - 1;

	switch (needTo) {
		case 'lose':
			return isFirshElement ? choices[choices.length - 1] : choices[oppHandIndex - 1];
		case 'win':
			return isLastElement ? choices[0] : choices[oppHandIndex + 1];
		case 'draw':
			return OpponentsHandMap[oppHand];
		default:
			break;
	}
};

module.exports = {
	calculateWinner,
	calculateRightShape,
	OpponentsHandMap,
	MyHandMapPt1,
	MyHandMapPt2,
};
