function createPhoneNumber(numbers) {
  let pattern = /(\d{3})(\d{3})(\d{4})/;

  let part = numbers.join("").match(pattern);

  return `(${part[1]}) ${part[2]}-${part[3]}`;
}
