var moveZeros = function (arr) {
  let zeros = arr.filter((e) => e === 0);
  let op = arr.filter((e) => e !== 0);

  return op.concat(zeros);
};
