function divisibleByThree(str) {
  return str.split("").reduce((total, num) => total + Number(num), 0) % 3 === 0;
}
