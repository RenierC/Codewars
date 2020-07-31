let vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  let re = /[aeiou]/gi;
  console.log(string.replace(re, (e) => vowels[e]));
  return string.replace(re, (e) => vowels[e]);
}

function decode(string) {
  let re = /\d/g;
  let values = (value) =>
    Object.keys(vowels).find((char) => vowels[char] === value);

  return string.replace(re, (e) => values(Number(e)));
}
