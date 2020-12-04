function countSmileys(arr) {
  let re = /[:;][-~]?[)D]/g;
  let test = arr.join("").match(re);

  return test ? test.length : 0;
}
