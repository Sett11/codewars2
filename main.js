function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((el, i, arr) => {
      if (arr.indexOf(el) === arr.lastIndexOf(el)) {
        el = "(";
        return el;
      } else {
        el = ")";
        return el;
      }
    })
    .join("");
}
console.log(duplicateEncode("Success"));
