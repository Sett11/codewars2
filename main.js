function sortVowels(s) {
  return typeof s !== "string" || !s
    ? ""
    : s
        .replace(/[^aiuoe]/gi, "$&|\n")
        .replace(/[aieou]/gi, "|$&\n")
        .replace(/\n$/, '');
}
console.log(sortVowels("Codewars"));
("C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|");
