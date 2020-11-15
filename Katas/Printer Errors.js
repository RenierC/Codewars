function printerError(s) {
  let op = s.match(/[a-m]/g).length;

  return `${s.length - op}/${s.length}`;
}
