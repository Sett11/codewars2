function scrabbleScore(str) {
  return str
    .replace(/[aeioulnrst]/gi, " 1 ")
    .replace(/[dg]/gi, " 2 ")
    .replace(/[bcmp]/gi, " 3 ")
    .replace(/[fhvwy]/gi, " 4 ")
    .replace(/[k]/gi, " 5 ")
    .replace(/[jx]/gi, " 8 ")
    .replace(/[qz]/gi, " 10 ").split` `
    .filter((el) => el !== "")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(scrabbleScore("street"));
