function sortArray(array) {
  let odds = array.filter((e) => e % 2 !== 0).sort((a, b) => a - b);
  return array.map((z) => (z % 2 ? odds.shift() : z));
}
