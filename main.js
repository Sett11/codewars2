function gordon(a) {
  return a
    .split(" ")
    .map((el) => {
      el =
        el
          .toUpperCase()
          .replace(/a/gi, "@")
          .replace(/[ouei]/gi, "*") + "!!!!";
      return el;
    })
    .join(" ");
}
console.log(gordon("What feck damn cake"));
