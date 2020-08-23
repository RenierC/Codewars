function persistence(number) {
  let counter = 0;

  while (String(number).length !== 1) {
    number = [...String(number)].reduce((total, number) => total * number);
    counter++;
  }

  return counter;
}
