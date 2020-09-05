function toCamelCase(str) {
  if (str === "") return "";
  let re = /[^a-z]/gi;

  let op = str
    .split(re)
    .map((e) => e[0].toUpperCase() + e.substring(1))
    .join("");

  return str[0] === str[0].toLowerCase()
    ? op[0].toLowerCase() + op.substring(1)
    : op;
}
