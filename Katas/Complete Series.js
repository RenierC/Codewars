function completeSeries(arr) {
  let sorted = arr.sort();
  let last = sorted[sorted.length - 1];
  let result = [];

  let repeated = sorted.some((a, i) => sorted.indexOf(a) !== i);

  if (repeated) {
    result.push(0);
  } else {
    for (let i = 0; i <= last; i++) {
      result.push(i);
    }
  }

  return result;
}
