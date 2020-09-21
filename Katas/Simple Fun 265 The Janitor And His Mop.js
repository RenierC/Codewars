function theJanitor(word) {
  const result = Array(26).fill(0);

  [...new Set(word)].map(
    (e) =>
      (result[e.charCodeAt(0) - 97] = word.lastIndexOf(e) - word.indexOf(e) + 1)
  );

  return result;
}
