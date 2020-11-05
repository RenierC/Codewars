function findNeedle(haystack) {
  let pos = haystack.findIndex((e) => e === "needle");
  return "found the needle at position " + pos;
}
