var greet = function (name) {
  let person = name.toLowerCase();
  return `Hello ${person[0].toUpperCase()}${person.slice(1)}!`;
};
