function spinWords(word) {
  return word
    .split(" ")
    .map((e) => (e.length >= 5 ? [...e].reverse().join("") : e))
    .join(" ");
}
