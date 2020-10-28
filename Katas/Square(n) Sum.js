function squareSum(numbers) {
  return numbers.map((e) => Math.pow(e, 2)).reduce((a, b) => a + b, 0);
}
