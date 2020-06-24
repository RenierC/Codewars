String.prototype.toJadenCase = function () {
  let str = this;
  let jadenized = "";

  for (let i = 0; i <= str.length; i++) {
    let pos = str.charAt(i);

    if (str.charAt(i - 1) === " " || str.indexOf(pos) === 0) {
      jadenized += pos.toUpperCase();
    } else {
      jadenized += pos;
    }
  }
  return jadenized;
};
