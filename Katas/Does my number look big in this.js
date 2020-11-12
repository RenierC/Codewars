function narcissistic(value) {
  let arr = String(value).split("");
  let op = arr
    .map(Number)
    .map((e) => Math.pow(e, arr.length))
    .reduce((a, b) => a + b);

  return op === value;
}
