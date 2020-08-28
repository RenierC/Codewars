function duplicateCount(text) {
  let counts = [...text.toLowerCase()].reduce((total, current) => {
    current in total ? total[current]++ : (total[current] = 1);
    return total;
  }, {});

  return Object.entries(counts).filter((x) => x[1] > 1).length;
}
