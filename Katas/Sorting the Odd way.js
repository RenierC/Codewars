function sortItOut(array) {
  let odds = array.filter((e) => e & (1 === 1)).sort((a, b) => a - b);
  let evens = array.filter((e) => !odds.includes(e)).sort((a, b) => b - a);

  return odds.concat(evens);
}
