function solve(a, b) {
  let first = a
    .split("")
    .filter((e) => !b.includes(e))
    .join("");
  let second = b
    .split("")
    .filter((e) => !a.includes(e))
    .join("");

  return first + second;
}
