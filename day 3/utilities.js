// a-z 97 - 122 should be 1 - 26
// A-Z 65 - 90 should be 27 - 52
const calculatePointsForLetter = (letter) => {
	return letter.toUpperCase() === letter ? letter.charCodeAt(0) - 38 : letter.charCodeAt(0) - 96;
};

const isIncludes = (string, substring) => {
	if (string.indexOf(substring) !== -1) {
		return true;
	}
	return false;
};

module.exports = {
	calculatePointsForLetter,
	isIncludes,
};
