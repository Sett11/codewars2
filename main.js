function modifyMultiply(str, loc, num) {
  const res = str.split` `[loc].split` `;
  const arr = Array(num).fill(res);
  return arr.join("-");
}
console.log(
  modifyMultiply(
    "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
    8,
    10
  )
);
