function capitalize(s, arr) {
  let str = [...s];

  arr.map((e) => (str[e] ? (str[e] = str[e].toUpperCase()) : e));

  return str.join("");
}
