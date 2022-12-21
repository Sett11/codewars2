function vowelOne(s) {
  return s
    .split("")
    .map((el) => {
        el = el.toLowerCase()
      if (el === "a" || el === "u" || el === "e" || el === "i" || el === "o") {
        el = 1;
        return el;
      } else {
        el = 0;
        return el;
      }
    })
    .join("");
}
console.log(vowelOne("aeiou, abc"));
