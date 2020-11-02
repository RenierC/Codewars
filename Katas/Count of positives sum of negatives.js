function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];
  let positive = [];
  let negative = [];

  input.map((e) => (e > 0 ? positive.push(e) : negative.push(e)));
  let reduced = negative.reduce((a, b) => a + b, 0);

  return [positive.length, reduced];
}
