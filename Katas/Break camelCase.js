function solution(string) {
  let re = /[A-Z]/g;
  let match = string.match(re);

  function matchSpace(match) {
    return " " + match;
  }

  return string.replace(re, matchSpace);
}
