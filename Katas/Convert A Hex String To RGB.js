function hexStringToRGB(hexString) {
  let re = /\w{2}/gi;
  let groups = hexString.match(re);
  let rgb = {};

  rgb.r = Number.parseInt("0x" + groups[0]);
  rgb.g = Number.parseInt("0x" + groups[1]);
  rgb.b = Number.parseInt("0x" + groups[2]);

  return rgb;
}
