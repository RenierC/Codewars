var uniqueInOrder = function (iterable) {
  return Array.isArray(iterable) ? clean(iterable) : clean(iterable.split(""));

  function clean(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) result.push(arr[i]);
    }
    return result;
  }
};
