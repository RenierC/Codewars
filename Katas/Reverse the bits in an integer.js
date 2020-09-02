function reverseBits(n) {
  // convert to binary
  let bin = n.toString(2);
  // convert to array and reverse the order
  let op = [...bin].reverse().join("");
  // convert from binary to decimal
  return parseInt(op, 2);
}
