function stringTransformer(str) {
  let upper = /[A-Z]/;
  let lower = /[a-z]/;
  let white = /\s/;

  let result = [];
  let arr = str.split("");

  let convert = arr.forEach((e) => {
    if (upper.test(e)) result.push(e.toLowerCase());
    if (lower.test(e)) result.push(e.toUpperCase());
    if (white.test(e)) result.push(e);
  });

  return result.join("").split(/(\s+)/).reverse().join("");
}
