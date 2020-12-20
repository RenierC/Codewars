function solve(n) {
  let notes = [500, 200, 100, 50, 20, 10];
  let total = n;
  let result = [ ];

  for (let i = 0; i < notes.length; i++) {
    result.push(Math.floor(total / notes[i]));
    total = total % notes[i];
  }

  let bills = result.reduce((a, b) => a + b);

  return total !== 0 ? -1 : bills;
}
