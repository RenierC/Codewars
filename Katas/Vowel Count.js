function getCount(str) {
  let found = str.match(/[aeiou]/g);
  return found ? found.length : 0;
}
