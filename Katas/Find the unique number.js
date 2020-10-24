function findUniq(arr) {
  let op = arr.reduce((total, num) => {
    num in total ? total[num]++ : (total[num] = 1);
    return total;
  }, {});
  return Number(Object.keys(op).find((key) => op[key] === 1));
}
