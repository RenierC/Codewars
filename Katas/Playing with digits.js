function digPow(n, p) {
  let sumPow = [...String(n)].reduce((total, curr) => {
    curr = Math.pow(curr, p);
    p++;

    return total + curr;
  }, 0);

  let k = Math.round(sumPow / n);

  return n * k === sumPow ? k : -1;
}
