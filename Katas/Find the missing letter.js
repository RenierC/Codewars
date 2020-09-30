function findMissingLetter(array) {
  let range = [];
  // generate an the full desired array taking array[0] as the start
  for (const s of Array(array.length + 1).keys()) {
    range.push(String.fromCharCode(array[0].charCodeAt(0) + s));
  }
  // compare the range of the array generated and the passed one and filters the
  // element that it's not in both
  return range.filter((x) => !array.includes(x)).join("");
}
