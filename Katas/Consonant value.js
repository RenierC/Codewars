function solve(s) {
  return Math.max(
    ...s.split(/[aeiou]/g).map((e) =>
      e
        .split("")
        .map((x) => x.charCodeAt(x[0]) - 96)
        .reduce((value, num) => value + num, 0)
    )
  );
}
