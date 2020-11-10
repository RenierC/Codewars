function rgb(r, g, b) {
  let round = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
  let hex = (num) => round(num).toString(16);
  let filler = (val) =>
    hex(val).length < 2 ? "0" + hex(val).toUpperCase() : hex(val).toUpperCase();

  return filler(r) + filler(g) + filler(b);
}
