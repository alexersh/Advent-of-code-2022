const parseInput = (input) => {
	return input.map((v) => {
		const [instr, val] = v.split(' ');
		return [instr, +val];
	});
};

const doInstuctions = (input) => {
	let X = 1;
	let cycle = 1;
	let signalSum = 0;

	const checkStrength = () => {
		if ((cycle - 20) % 40 === 0) {
			signalSum += cycle * X;
		}
	};

	for (const [instruction, value] of input) {
		cycle++;
		switch (instruction) {
			case 'noop':
				break;

			case 'addx':
				checkStrength();
				cycle++;
				X += value;
				break;
		}
		checkStrength();
	}

	return signalSum;
};

const drawImage = (input) => {
	let X = 1;
	let cycle = 1;
	const screen = [[], [], [], [], [], []];

	const draw = () => {
		const pos = cycle - 1;
		const row = Math.floor(pos / 40);
		const drawn = Math.abs((pos % 40) - X) <= 1;
		screen[row].push(drawn ? '#' : '.');
	};

	for (const [instruction, value] of input) {
		draw();
		cycle++;
		switch (instruction) {
			case 'noop':
				break;

			case 'addx':
				draw();
				cycle++;
				X += value;
				break;
		}
	}

	return screen.map((row) => row.join(''));
};

module.exports = {
	parseInput,
	drawImage,
	doInstuctions,
};
