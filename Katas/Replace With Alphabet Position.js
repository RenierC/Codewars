function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let positions = [];
  let alpha = alphabet.split("");
  let arr = text.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    alpha.find((e) => {
      if (e === arr[i]) {
        positions.push(alpha.indexOf(e) + 1);
      }
    });
  }

  return positions.join(" ");
}
