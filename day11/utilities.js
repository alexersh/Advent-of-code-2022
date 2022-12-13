const parseInput = (input) => {
	return input
		.filter((l) => l)
		.map((line) => {
			const [_number, startItems, operationLine, test, testTrue, testFalse] = line.trim().split('\r\n');

			const [_, operator, value] = operationLine.match(/([+*]) (old|\d+)/);

			let opFn;

			if (value === 'old') {
				opFn = (old) => old * old;
			} else if (operator === '*') {
				opFn = (old) => old * +value;
			} else if (operator === '+') {
				opFn = (old) => old + +value;
			}

			return {
				items: [...startItems.matchAll(/(\d+)/g)].map((m) => +m[0]),
				opFn: opFn,
				divisor: +test.match(/(\d+)/)[0],
				trueMonkey: +testTrue.match(/(\d+)/)[0],
				falseMonkey: +testFalse.match(/(\d+)/)[0],
				inspectCount: 0,
			};
		});
};

const simulateMonkeysPt1 = (monkeys, rounds) => {
	for (r = 0; r < rounds; r++) {
		for (const monkey of monkeys) {
			while (monkey.items.length > 0) {
				let item = monkey.items.shift();
				item = monkey.opFn(item);
				item = Math.floor(item / 3);

				if (item % monkey.divisor === 0) {
					monkeys[monkey.trueMonkey].items.push(item);
				} else {
					monkeys[monkey.falseMonkey].items.push(item);
				}

				monkey.inspectCount += 1;
			}
		}
	}
	const monkeyInspections = monkeys.map((m) => m.inspectCount);
	monkeyInspections.sort((a, b) => b - a);

	return (monkeyInspections[0] * monkeyInspections[1]).toString();
};

const simulateMonkeysPt2 = (monkeys, rounds) => {
	const divisorProduct = monkeys.map((m) => m.divisor).reduce((prev, curr) => prev * curr, 1);

	for (r = 0; r < rounds; r++) {
		for (const monkey of monkeys) {
			while (monkey.items.length > 0) {
				let item = monkey.items.shift();
				item = monkey.opFn(item);
				item = Math.floor(item) % divisorProduct;

				if (item % monkey.divisor === 0) {
					monkeys[monkey.trueMonkey].items.push(item);
				} else {
					monkeys[monkey.falseMonkey].items.push(item);
				}

				monkey.inspectCount += 1;
			}
		}
	}
	const monkeyInspections = monkeys.map((m) => m.inspectCount);
	monkeyInspections.sort((a, b) => b - a);

	return (monkeyInspections[0] * monkeyInspections[1]).toString();
};

module.exports = {
	parseInput,
	simulateMonkeysPt1,
	simulateMonkeysPt2,
};
