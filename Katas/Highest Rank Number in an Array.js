function highestRank(arr) {
  // make an object with key/values to see who repeats the most
  let repeating = arr.reduce((allNums, num) => {
    num in allNums ? allNums[num]++ : (allNums[num] = 1);

    return allNums;
  }, {});

  // get the maximum amount of repetitions
  let getMax = Math.max(...Object.values(repeating));

  let sorted = Object.keys(repeating).sort(function (a, b) {
    return b - a;
  });

  let result = sorted.find((key) => repeating[key] === getMax);

  return Number(result);
}
