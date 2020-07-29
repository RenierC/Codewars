function rot13(message) {
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let re = /[A-Za-z]/;

  return message
    .split("")
    .map((e) => (re.test(e) ? output[input.indexOf(e)] : e))
    .join("");
}
