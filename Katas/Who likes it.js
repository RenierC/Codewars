function likes(names) {
  let output = "";
  let last = names.length - 1;
  let numberOfElements = names.length;

  if (numberOfElements === 0) {
    output = "no one likes this";
  } else if (numberOfElements === 1) {
    output = names[0] + " likes this";
  } else if (numberOfElements === 2) {
    output = names[0] + " and " + names[1] + " like this";
  } else if (numberOfElements === 3) {
    output = names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    output =
      names[0] + ", " + names[1] + " and " + (last - 1) + " others like this";
  }

  return output;
}
