var isSquare = function (n) {
  let result = false;

  if (n < 0) {
    return false;
  }

  if (!result) {
    for (let i = 0; i <= n && !result; i++) {
      i * i === n ? (result = true) : (result = false);
    }
  }

  return result;
};
