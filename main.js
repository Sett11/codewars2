function moveVowel(inp) {
  const arr = [];
  inp.split``.map((el) =>
    el === "a" || el === "i" || el === "e" || el === "o" || el === "u"
      ? arr.push(el)
      : el
  );
  inp = inp.replace(/a|i|e|o|u/g, "");
  return inp + arr.join``;
}
console.log(moveVowel("apple"));
