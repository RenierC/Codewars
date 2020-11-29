function high(x) {
  let sum = x
    .split(" ")
    .map((e) =>
      [...e].map((x) => x.charCodeAt(0) - 96).reduce((a, b) => a + b)
    );

  let index = sum.indexOf(Math.max(...sum));
  return x.split(" ")[index];
}
