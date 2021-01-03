function isValidWalk(walk) {
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;

  if (walk.length === 10) {
    for (let direction of walk) {
      switch (direction) {
        case "n":
          n++;
          break;
        case "s":
          s++;
          break;
        case "e":
          e++;
          break;
        case "w":
          w++;
          break;
      }
    }

    if(n === s && w === e) {
      return true;
    }
    return false;
  }
}
