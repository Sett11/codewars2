function swap(string) {
  return string
    .replace(/a/g, "A")
    .replace(/u/g, "U")
    .replace(/o/g, "O")
    .replace(/i/g, "I")
    .replace(/e/g, "E");
}
console.log(swap("HelloWorld!"));
