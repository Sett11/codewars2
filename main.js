function remove(string) {
  const arr = string.split``;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "!") {
      res.push(arr[i]);
    }
  }
  const str = arr.filter((el) => el !== "!");
  return str.concat(res).join("");
}
console.log(remove("Hi! Hi! Hi!"));
