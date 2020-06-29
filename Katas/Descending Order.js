function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => a - b)
      .reverse()
      .join("")
  );
}
