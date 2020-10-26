function countSheeps(arrayOfSheep) {
  let result = 0;
  for (let i in arrayOfSheep) {
    if (arrayOfSheep[i]) result++;
  }
  return result;
}
