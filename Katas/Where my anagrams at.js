function anagrams(word, words) {
  let sort1 = [...word].sort().join("");

  let sort2 = words
    .map((e) => [...e].sort().join(""))
    .map((e, i) => {
      if (sort1 === e) {
        return i;
      }
    })
    .filter((e) => e !== undefined);

  let op = sort2.map((e) => words[e]);

  return op;
}
