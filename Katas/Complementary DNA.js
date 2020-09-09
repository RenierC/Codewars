function DNAStrand(dna) {
  return [...dna]
    .map((e) => {
      switch (true) {
        case e === "A":
          return "T";
          break;
        case e === "T":
          return "A";
          break;
        case e === "G":
          return "C";
          break;
        case e === "C":
          return "G";
          break;
      }
    })
    .join("");
}
