function toWeirdCase(string) {
  return string
    .split(" ")
    .map((x) =>
      [...x].map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase())).join("")
    )
    .join(" ");
}
