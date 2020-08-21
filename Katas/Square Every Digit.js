function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((e) => Math.pow(e, 2))
      .join("")
  );
}
