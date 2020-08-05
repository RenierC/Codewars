function scrabbleScore(str) {
  return str
    .toUpperCase()
    .split("")
    .reduce((total, letter) => total + ($dict[letter] || 0), 0);
}
