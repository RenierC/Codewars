function XO(str) {
  let op = [...str.toLowerCase()].reduce((total, curr) => {
    curr in total ? total[curr]++ : (total[curr] = 1);
    return total;
  }, {});

  return op.x === op.o;
}
