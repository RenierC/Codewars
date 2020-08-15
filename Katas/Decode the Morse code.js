decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(" ")
    .map((e) => MORSE_CODE[e] || " ")
    .join("")
    .replace(/\s+/g, " ");
};
