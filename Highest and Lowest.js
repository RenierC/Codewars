function highAndLow(numbers) {
  let nums = numbers.split(" ").map(Number);
  return Math.max(...nums) + " " + Math.min(...nums);
}
