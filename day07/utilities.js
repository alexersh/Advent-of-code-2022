const parseInput = (inputs) => {
	const fileSystem = {};
	let curr = fileSystem;

	for (const input of inputs) {
		if (input === '$ cd /') {
			curr = fileSystem;
		} else if (input === '$ cd ..') {
			curr = curr['..'];
		} else if (input.includes('$ cd')) {
			const dirname = input.split(' ')[2];
			curr = curr[dirname];
		} else if (input.includes('dir')) {
			const dirname = input.split(' ')[1];
			if (!curr[dirname]) {
				curr[dirname] = { '..': curr };
			}
		} else if (input === '$ ls') {
			// skip this command
		} else {
			const [size, filename] = input.split(' ');
			if (!curr[filename]) {
				curr[filename] = Number(size);
			} else if (curr[filename] !== Number(size)) {
				throw new Error('Bad input', input);
			}
		}
	}
	return fileSystem;
};

const getDirSizes = (name, dir) => {
	let size = 0;
	const childSizes = [];

	for (const [name, file] of Object.entries(dir)) {
		if (name !== '..') {
			if (typeof file === 'number') {
				size += file;
			} else {
				const nestedSizes = getDirSizes(name, file);
				size += nestedSizes[0][1];
				childSizes.push(...nestedSizes);
			}
		}
	}

	return [[name, size], ...childSizes];
};

module.exports = {
	parseInput,
	getDirSizes,
};
