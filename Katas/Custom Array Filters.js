function checkIfInteger(e) {
  // if both are true we got an integer
  return typeof e === "number" && e % 1 === 0;
}

Array.prototype.even = function () {
  return this.filter((e) => {
    if (checkIfInteger(e) && e % 2 === 0) return e;
  });
};

Array.prototype.odd = function () {
  return this.filter((e) => {
    if (checkIfInteger(e) && e % 2 !== 0) return e;
  });
};

Array.prototype.under = function (x) {
  return this.filter((e) => {
    if (checkIfInteger(e) && e < x) return e == 0 ? "0" : e;
  });
};

Array.prototype.over = function (x) {
  return this.filter((e) => {
    if (checkIfInteger(e) && e > x) return e;
  });
};

Array.prototype.inRange = function (min, max) {
  return this.filter((e) => {
    if (checkIfInteger(e) && e >= min && e <= max) return e;
  });
};
