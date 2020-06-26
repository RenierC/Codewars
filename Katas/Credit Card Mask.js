function maskify(cc) {
  let masked = "";

  for (let i = 0; i <= cc.length; i++) {
    if (i < cc.length - 4) {
      masked += "#";
    } else {
      masked += cc.charAt(i);
    }
  }
  return masked;
}
