function pigIt(str) {
  //check for special character
  let special = /[^A-Z]/gi;
  //if special character is present return it if not piglatinaze it
  return str
    .split(" ")
    .map((e) => (special.test(e) ? e : (e + e[0] + "ay").slice(1)))
    .join(" ");
}
