function alienLanguage(str) {
  return str.split(" ").map((el) => {
    el = `${el.slice(0, el.length - 1).toUpperCase()}${el
      .charAt(el.length - 1)
      .toLowerCase()}`;
    return el;
  }).join` `;
}
console.log(alienLanguage("My name is John"));
