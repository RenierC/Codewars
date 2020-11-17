function solve(s) {
  let upper = 0;
  let lower = 0;

  [...s].map((e) => (e === e.toUpperCase() ? upper++ : lower++));

  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}
