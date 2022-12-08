const isVisible = (forest, x, y, tree) => {
	let visible = true;

	// If first or last tree in column/row
	if (x == 0 || y == 0 || x == forest.length - 1 || y == forest[x].length - 1) return 1;

	let top = (right = bottom = left = true);

	// Top
	for (i = 0; i < x; i++) {
		if (forest[i][y] >= tree) top = false;
	}
	// Bottom
	for (i = x + 1; i < forest.length; i++) {
		if (forest[i][y] >= tree) bottom = false;
	}
	// Left
	for (i = 0; i < y; i++) {
		if (forest[x][i] >= tree) left = false;
	}
	// Right
	for (i = y + 1; i < forest[x].length; i++) {
		if (forest[x][i] >= tree) right = false;
	}

	visible = top || right || bottom || left;
	return visible ? 1 : 0;
};

const calculateScenicScore = (forest, x, y, tree) => {
	// If first or last tree in column/row
	if (x == 0 || y == 0 || x == forest.length - 1 || y == forest[x].length - 1) return 0;

	let top = (right = bottom = left = 0);

	// Top
	for (i = x - 1; i >= 0; i--) {
		if (forest[i][y] < tree) top++;
		// Last tree that you can see
		else {
			top++;
			break;
		}
	}
	// Bottom
	for (i = x + 1; i < forest.length; i++) {
		if (forest[i][y] < tree) bottom++;
		// Last tree that you can see
		else {
			bottom++;
			break;
		}
	}
	// Left
	for (i = y - 1; i >= 0; i--) {
		if (forest[x][i] < tree) left++;
		// Last tree that you can see
		else {
			left++;
			break;
		}
	}
	// Right
	for (i = y + 1; i < forest[x].length; i++) {
		if (forest[x][i] < tree) right++;
		// Last tree that you can see
		else {
			right++;
			break;
		}
	}

	return top * right * bottom * left;
};

module.exports = {
	isVisible,
	calculateScenicScore,
};
