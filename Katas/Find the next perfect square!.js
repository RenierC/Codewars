function findNextSquare(sq) {
  let square = Math.sqrt(sq);

  return Number.isInteger(square) ? Math.pow(square + 1, 2) : -1;
}
