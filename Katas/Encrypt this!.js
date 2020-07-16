var encryptThis = function (text) {
  // first I change the or order of second to last
  let flip = text.split(" ").map((e) => {
    if (e.length > 2) {
      let arr = e.split("");
      let second = 1;
      let last = arr.length - 1;
      // es6 fancy way of swapping values in an array
      [arr[second], arr[last]] = [arr[last], arr[second]];
      return arr.join("");
      // if the length is smaller than 2 then the rule of swap doesn't apply
    } else {
      return e;
    }
  });

  // this converts the first char into ascii
  let convert = flip.map((e) => e.replace(e[0], e.charCodeAt(e[0]))).join(" ");

  return convert;
};
