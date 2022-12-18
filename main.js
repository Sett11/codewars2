function filterLongWords(sentence, n) {
  const str = sentence.split(" ");
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > n) {
      arr.push(str[i]);
    }
  }
  return arr;
}
console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));
