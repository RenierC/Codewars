var fizzBuzzCustom = function (
  stringOne = "Fizz",
  stringTwo = "Buzz",
  numOne = 3,
  numTwo = 5
) {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % numOne === 0) output += stringOne;
    if (i % numTwo === 0) output += stringTwo;
    if (output === "") output = i;
    result.push(output);
  }

  return result;
};
