function list(names) {
  let arr = [];
  let chars = "";

  // I convert the hashes into an array
  for (let count of names) {
    arr.push(count.name);
  }
  // loop the array
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - 1;
    let secondLast = last - 1;

    // check to see if i'm in the last to put nothing
    // second last to add &
    // none of those to add comma ,
    // after that I add them to the chars variable aggregating in each iteration

    if (i === last) {
      chars += arr[i];
    } else if (i === secondLast) {
      chars += arr[i] + " & ";
    } else {
      chars += arr[i] + ", ";
    }
  }
  return chars;
}
