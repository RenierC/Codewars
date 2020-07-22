function iqTest(numbers) {
  let arr = numbers
    .split(" ")
    .map((e) => (Number(e) % 2 === 0 ? "even" : "odd"));

  let count = arr.reduce((chars, char) => {
    char in chars ? chars[char]++ : (chars[char] = 1);
    return chars;
  }, {});

  let different = Object.keys(count).find((key) => count[key] === 1);

  return arr.indexOf(different) + 1;
}
