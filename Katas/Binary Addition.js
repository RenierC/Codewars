function addBinary(a, b) {
  let n = a + b;
  let conversion = [];

  for (let i = 0; n > 0; i++) {
    conversion.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  return conversion.join("");
}
