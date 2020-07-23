var maxSequence = function (arr) {
  // if all values are negative return 0
  if (arr.every((value) => value < 0)) return 0;
  // if all values are positive return the sum of all of them
  if (arr.every((value) => value >= 0))
    return arr.reduce((total, num) => total + num);

  let result = [];

  for (let x = 0; x <= arr.length; x++) {
    let windowSize = x;
    let maxSum = 0;

    for (let i = 0; i < windowSize; i++) maxSum += arr[i];

    let startingPoint = 0;
    let gapSize = windowSize;
    let tempSum = maxSum;

    while (gapSize < arr.length) {
      tempSum = tempSum - arr[startingPoint] + arr[gapSize];

      if (tempSum > maxSum) maxSum = tempSum;
      startingPoint++;
      gapSize++;
    }
    result.push(maxSum);
  }
  return Math.max(...result);
};
