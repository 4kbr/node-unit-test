export const sum = (first: number, second: number) => {
  return first + second;
};

export const sumAll = (numbers: number[]) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

export const calculate = (
  numbers: number[],
  callback: (num: number) => void
) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  callback(total);
};

export const calculateAndReturn = (
  numbers: number[],
  callback: (num: number) => void
) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return callback(total);
};
