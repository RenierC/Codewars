function abbrevName(name) {
  let n = name.split(" ");
  return n[0][0].toUpperCase() + "." + n[1][0].toUpperCase();
}
