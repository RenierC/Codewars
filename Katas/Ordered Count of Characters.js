var orderedCount = function (text) {
  let count = text.split("").reduce((letters, letter) => {
    letter in letters ? letters[letter]++ : (letters[letter] = 1);
    return letters;
  }, {});

  const letters = [...new Set([...text])];

  return letters.map((letter) => [letter, count[letter]]);
};
