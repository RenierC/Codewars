function isPangram(string) {
  let op = [...new Set(string.toLowerCase())]
    .filter((e) => /\w/.test(e))
    .filter((x) => !Number(x))
    .sort();

  let abc = Array.from(Array(26).keys()).map((e) =>
    String.fromCharCode(e + 97)
  );

  return JSON.stringify(op) === JSON.stringify(abc);
}
