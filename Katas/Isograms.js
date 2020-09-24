function isIsogram(str) {
  let op = [...str.toLowerCase()].reduce((total, curr) => {
    curr in total ? total[curr]++ : (total[curr] = 1);
    return total;
  }, {});

  return Object.values(op).every((e) => (e === 1 ? true : false));
}
