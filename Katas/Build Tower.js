function towerBuilder(nFloors) {
  let pyramid = [];

  let count = 1;
  for (let i = 1; i <= nFloors; i++) {
    let space = " ".repeat(nFloors - i);
    let stars = "*".repeat(count);
    pyramid.push(`${space}${stars}${space}`);
    count += 2;
  }

  return pyramid;
}
