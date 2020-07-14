function numPrimorial(n) {
  let primes = [];

  function checkPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; primes.length < n; i++) {
    if (checkPrime(i)) primes.push(i);
  }

  return primes.reduce((acc, curr) => acc * curr);
}
