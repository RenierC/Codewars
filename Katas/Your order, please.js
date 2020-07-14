function order(words) {
  let result = [];

  let arr = words.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let s = String(i + 1);
    arr.find((e) => {
      if (e.includes(s)) result.push(e);
    });
  }

  return result.join(" ");
}
