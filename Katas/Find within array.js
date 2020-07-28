var findInArray = function (array, iterator) {
  let result = [];
  array.map((e, i) => (iterator(e, i) ? result.push(i) : result.push(-1)));

  let value = result.find((e) => e > -1);

  if (result.every((e) => e === -1)) return -1;
  return value;
};
