function count(string) {
  return string.split("").reduce((strings, string) => {
    string in strings ? strings[string]++ : (strings[string] = 1);
    return strings;
  }, {});
}
