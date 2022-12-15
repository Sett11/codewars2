function makeString(s) {
  return s
    .split(" ")
    .map((el) => {
      const first = el.charAt(0);
      return first;
    })
    .join("");
}

console.log(makeString("brown eyes are nice"));
