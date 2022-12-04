import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const input = rawInput.split("\n").map((num) => parseInt(num, 10));

  return input;
};

const calculateSums = (input: number[]) => {
  const array: number[] = [];

  let tempSumm = 0;

  input.forEach((data) => {
    if (isNaN(data)) {
      array.push(tempSumm);
      tempSumm = 0;
      return;
    }
    tempSumm += data;
  });
  return array.sort((a, b) => b - a);
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const resultArray = calculateSums(input);

  return resultArray[0];
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const resultArray = calculateSums(input);

  return resultArray[0] + resultArray[1] + resultArray[2];
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
  onlyTests: true,
});
