function addLetters(...letters) {
  if (letters.length === 0) return "z";
  if (letters.length === 1 && letters.includes("z")) return "z";

  let codes = [];

  for (let i = 0; i < letters.length; i++) {
    codes.push(letters[i].charCodeAt(0) - 96);
  }
  let sum = codes.reduce((total, num) => total + num);

  let conversion = String.fromCharCode((sum % 26) + 96);

  return conversion === "`" ? "z" : conversion;
}
