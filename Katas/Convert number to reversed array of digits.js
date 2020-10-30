function digitize(n) {
  return [...String(n)].reverse().map((e) => Number(e));
}
