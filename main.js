function longestWord(stringOfWords) {
  const arr = stringOfWords.split(" ");
  const newArr = arr.map((el) => (el = el.length));
  const ind = newArr.lastIndexOf(Math.max.apply(null, newArr));
  return arr[ind];
}
console.log(longestWord("one two three"));
