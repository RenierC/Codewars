function expressionMatter(a, b, c) {
  let results = [];

  results.push(a * (b + c));
  results.push(a * b * c);
  results.push(a + b * c);
  results.push((a + b) * c);
  results.push(a + b + c);

  return Math.max(...results);
}
