function sumDigPow(a, b) {
  let range = [];

  for (let i = Math.min(...[a, b]); i < Math.max(...[a, b]); i++) {
    range.push(i);
  }

  let reducer = (value) =>
    String(value)
      .split("")
      .reduce((total, curr, i) => Number(total) + Math.pow(curr, i + 1));

  return range.reduce((total, curr) => {
    if (String(curr).length === 1) total.push(curr);
    if (reducer(curr) === curr) total.push(curr);

    return total;
  }, []);
}
