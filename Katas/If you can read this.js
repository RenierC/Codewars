function to_nato(words) {
  let nato = [
    "Alfa",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliett",
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Papa",
    "Quebec",
    "Romeo",
    "Sierra",
    "Tango",
    "Uniform",
    "Victor",
    "Whiskey",
    "Xray",
    "Yankee",
    "Zulu",
  ];

  let clean = words.toUpperCase().replace(/\s/g, "").split("");

  let result = [];

  let match = clean.map((e) => {
    let found = nato.find((word) => word[0] === e);
    found ? result.push(found) : result.push(e);
  });

  return result.join(" ");
}
