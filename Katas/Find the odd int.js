function findOdd(A) {
  let reduced = A.reduce((numbers, num) => {
    num in numbers ? numbers[num]++ : (numbers[num] = 1);
    return numbers;
  }, {});
  return Number(Object.entries(reduced).find((e) => e[1] % 2 !== 0)[0]);
}
