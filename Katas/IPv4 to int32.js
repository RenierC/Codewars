function ipToInt32(ip) {
  let bin = ip
    .split(".")
    .map((e) => ("00000000" + Number(e).toString(2)).slice(-8))
    .join("");

  return parseInt(bin, 2);
}
