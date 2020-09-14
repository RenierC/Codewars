function tickets(peopleInLine) {
  if (peopleInLine[0] !== 25) return "NO";
  let register = { 25: 0, 50: 0 };

  for (let i = 0; i < peopleInLine.length; i++) {
    const person = peopleInLine[i];

    switch (true) {
      case person === 25:
        register[25]++;
        break;
      case person === 50:
        register[25]--;
        register[50]++;
        break;
      // default is them having a 100 bill
      default:
        if (register[50] === 0) {
          register[25] -= 3;
        } else {
          register[50] -= 1;
          register[25]--;
        }
        break;
    }
    // if I have no 25 bills it has to stop
    if (register[25] < 0) return "NO";
  }

  return "YES";
}
