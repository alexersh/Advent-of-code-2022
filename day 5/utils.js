const constructMatrix = (rows, columns) => {
	return Array.from(Array(+rows), () => new Array(+columns));
};

const reverseMatrix = (matrix) => {
	const cols = matrix[0].length;
	const rows = matrix.length;

	const reversedMatrix = constructMatrix(cols, rows);

	for (i = 0; i < cols; i++)
		for (j = 0; j < rows; j++) {
			reversedMatrix[i][j] = matrix[j][i];
		}

	return reversedMatrix;
};

const parseInput = (input) => {
	const rows = Number(input.findIndex((data) => data.includes('1')));
	const cols = Number(input[rows].trim().slice(-1));

	const crates = input.slice(0, rows).map((data) => data.split(' ').join('#'));

	const matrix = constructMatrix(rows, cols);

	for (i = 0; i < rows; i++) {
		let step = 0;
		for (j = 0; j < cols; j++) {
			matrix[i][j] = crates[i].slice(step, step + 3);
			step += 4;
		}
	}

	const reversedMatrix = reverseMatrix(matrix);

	const filtered = reversedMatrix.map((data) => data.filter((data) => data !== '###'));

	const movesIndex = input.findIndex((data) => data.includes('move'));

	const moves = input.slice(movesIndex).map((data) => data.split(' '));

	return { crates: filtered, moves };
};

const doMove = (crates, move, isSaveOrder) => {
	const pile = crates[move[3] - 1]?.slice(0, move[1]);

	crates[move[3] - 1]?.splice(0, move[1]);

	crates[move[5] - 1]?.splice(0, 0, ...(isSaveOrder ? pile : pile.reverse()));
};

const calcResultString = (crates) => {
	let result = '';

	for (const piles in crates) {
		result += crates[piles][0];
	}

	return result.split('[').join('').split(']').join('');
};

module.exports = {
	parseInput,
	doMove,
	calcResultString,
};
