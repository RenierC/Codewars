function race(v1, v2, g) {
  // hour , min , sec array
  let arr = [0, 0, 0];
  // get in seconds how much it will take to get there
  let secs = (3600 * g) / (v2 - v1);

  if (v2 > v1) {
    arr[0] = Math.floor(secs / 3600);
    arr[1] = Math.floor((secs % 3600) / 60);
    arr[2] = Math.floor(secs % 60);

    return arr;
  } else {
    return null;
  }
}
