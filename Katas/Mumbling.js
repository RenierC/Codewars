function accum(s) {
  let arr = [...s];
  let mumble = [];

  for (let i = 0; i < arr.length; i++) {
    mumble.push(s[i].repeat(i + 1).toLowerCase());
  }
  return mumble.map((e) => e[0].toUpperCase() + e.slice(1)).join("-");
}
