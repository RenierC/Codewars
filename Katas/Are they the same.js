function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;

  let powered = array1.map((e) => Math.pow(e, 2)).sort();

  return JSON.stringify(powered) === JSON.stringify(array2.sort());
}
