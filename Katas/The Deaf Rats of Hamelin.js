var countDeafRats = function (town) {
  let re = /(O~)|(~O)|(P)/g;
  let line = town.match(re);
  let piperPosition = line.indexOf("P");

  return line.reduce((deafRats, ratDirection, ratPosition) => {
    if (
      (!(ratPosition < piperPosition) && ratDirection === "~O") ||
      (!(ratPosition > piperPosition) && ratDirection === "O~")
    ) {
      deafRats++;
    }
    return deafRats;
  }, 0);
};
