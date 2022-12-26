function autocomplete(input, dictionary) {
  let arr = [];
  let r = /[A-Z]/gi;
  input = input.match(r).join("");
  dictionary.forEach((el) => {
    if (el.slice(0, input.length).toLowerCase() === input) {
      if (arr.length <= 4) {
        arr.push(el);
      }
    }
  });
  return arr;
}
console.log(
  autocomplete("a)($&#i", ["airport", "airplane", "gai", "apple", "ball"])
);
