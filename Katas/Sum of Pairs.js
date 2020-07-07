var sum_pairs = function (ints, s) {
  let checked = new Set();

  for (num of ints) {
    if (checked.has(s - num)) {
      return [s - num, num];
    } else {
      checked.add(num);
    }
  }
};
