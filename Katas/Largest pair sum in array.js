function largestPairSum(numbers) {
  return Math.max(
    ...numbers.reduce((total, num, i, arr) => {
      if (i + 1 < arr.length) {
        total.push(arr[i] + arr[i + 1]);
      }
      return total;
    }, [])
  );
}
