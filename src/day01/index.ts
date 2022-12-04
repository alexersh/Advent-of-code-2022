import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const input = rawInput
    .split("\n\n")
    .map((items) => items.split("\n").map(Number));

  return input;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  // Max sum of each subarrays
  return Math.max(...input.map((item) => item.reduce((a, b) => a + b), 0));
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return (
    input
      // Sum of each subarrays
      .map((item) => item.reduce((a, b) => a + b, 0))
      // Reversed sorting
      .sort((a, b) => b - a)
      // Grabbing first 3 elements
      .slice(0, 3)
      // Sum of last 3 elements
      .reduce((a, b) => a + b, 0)
  );
};

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
});
