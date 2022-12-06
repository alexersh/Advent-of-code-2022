const findUniqueCharsPosition = (chars, setSize) => {
	const lastChars = [];
	for (let i = 0; i < chars.length; i++) {
		lastChars.push(chars[i]);
		if (lastChars.length > setSize) lastChars.shift();
		if (new Set(lastChars).size === setSize) {
			return i + 1;
		}
	}
};

module.exports = {
	findUniqueCharsPosition,
};
