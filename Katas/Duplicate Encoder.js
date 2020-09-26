function duplicateEncode(word) {
  let op = [...word.toLowerCase()].reduce((acc, curr) => {
    curr in acc ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  return [...word.toLowerCase()].map((e) => (op[e] === 1 ? "(" : ")")).join("");
}
