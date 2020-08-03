function solve(a, b) {
  let sieve = [];
  let primes = [];
  let limit = 200000;
  let k;
  let l;

  sieve[1] = false;
  for (k = 2; k <= limit; k += 1) {
    sieve[k] = true;
  }
  for (k = 2; k * k <= limit; k += 1) {
    if (sieve[k] !== true) {
      continue;
    }
    for (l = k * k; l <= limit; l += k) {
      sieve[l] = false;
    }
  }
  sieve.forEach(function (value, key) {
    if (value) {
      this.push(key);
    }
  }, primes);

  let numString = primes.join("").split("");
  let result = [];
  for (let i = a; i < a + b; i++) {
    result.push(numString[i]);
  }

  return result.join("");
}
