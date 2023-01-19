function getCount(words) {
  const arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const obj = { vowels: 0, consonants: 0 };
  if (!words||typeof words !=='string') {
    return obj
}
  words.split``.map((el) => {
    if (arr.includes(el) && el.match(/a|e|u|o|i/gi)!==null) {
      obj.vowels += 1;
    }
    if (arr.includes(el)&& el.match(/a|e|u|o|i/gi)===null) {
      obj.consonants += 1;
    }
  });
  return obj;
}
console.log(getCount("   "));
