function century(year) {
  let last2digits = String(year).slice(-2);

  return last2digits === "00" ? year / 100 : Math.floor(year / 100) + 1;
}
