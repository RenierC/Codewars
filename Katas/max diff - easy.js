function maxDiff(list) {
  let sorted = list.sort((a, b) => a - b);
  return list.length > 0 ? sorted[sorted.length - 1] - sorted[0] : 0;
}
