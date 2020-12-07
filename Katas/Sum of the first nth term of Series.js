function SeriesSum(n) {
  let count = 1;
  let result = 0;

  for (let i = 0; i < n; i++) {
    result += 1 / count;
    count += 3;
  }

  return result.toFixed(2);
}
