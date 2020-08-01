function digital_root(n) {
  // sums all the numbers together
  let operation = String(n)
    .split("")
    .map((e) => Number(e))
    .reduce((total, current) => total + current);

  // test if the number is one digit long
  let test = String(operation).length === 1;

  // if the number has 1 digit return it if not do the
  // function again with the new value
  return test ? operation : digital_root(operation);
}
