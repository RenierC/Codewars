function mix(s1, s2) {
  // remove special characters and uppercases
  let clean = (string) =>
    [...string]
      .filter((e) => /\w/.test(e))
      .filter((x) => x !== x.toUpperCase());
  // generate an object with the quantity of each letter
  let reduced = (val) =>
    val.reduce((total, curr) => {
      curr in total ? total[curr]++ : (total[curr] = 1);
      return total;
    }, {});

  // remove everything that is smaller than 2
  let obj1 = Object.entries(reduced(clean(s1)))
    .filter(([key, value]) => value >= 2)
    .reduce((total, curr) => {
      total[curr[0]] = curr[1];
      return total;
    }, {});

  let obj2 = Object.entries(reduced(clean(s2)))
    .filter(([key, value]) => value >= 2)
    .reduce((total, curr) => {
      total[curr[0]] = curr[1];
      return total;
    }, {});

  let result = [];
  // get the keys in common
  for (let keys1 in obj1) {
    for (let keys2 in obj2) {
      switch (true) {
        case keys1 === keys2 && obj1[keys1] > obj2[keys2]:
          result.push(`1:${keys1.repeat(obj1[keys1])}`);
          delete obj1[keys1];
          delete obj2[keys2];
          break;
        case keys1 === keys2 && obj2[keys2] > obj1[keys1]:
          result.push(`2:${keys2.repeat(obj2[keys2])}`);
          delete obj1[keys1];
          delete obj2[keys2];
          break;
        case keys1 === keys2 && obj1[keys1] === obj2[keys2]:
          result.push(`=:${keys1.repeat(obj1[keys1])}`);
          delete obj1[keys1];
          delete obj2[keys2];
          break;
      }
    }
  }
  // push the remainder of the object

  if (Object.keys(obj1).length !== 0) {
    for (let otherKeys1 in obj1) {
      result.push(`1:${otherKeys1.repeat(obj1[otherKeys1])}`);
    }
  }
  if (Object.keys(obj2).length !== 0) {
    for (let otherKeys2 in obj2) {
      result.push(`2:${otherKeys2.repeat(obj2[otherKeys2])}`);
    }
  }
  // sort in the odd way they request
  let sorted = result.sort((a, b) => {
    if (b.length === a.length) {
      return a.codePointAt(0) - b.codePointAt(0) || a.localeCompare(b);
    } else {
      return b.length - a.length;
    }
  });

  return sorted.join("/");
}
