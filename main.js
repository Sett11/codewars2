const orderedCount = (text) => {
  text = text.split``
  const set = [...new Set(text)];
  let arr = [];
  for (let i = 0; i < set.length; i++) {
    arr.push(set[i]);
  }
  arr = arr.map((el) => [el]);
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (text[i] === arr[j][0]) {
        arr[j].push(text[i]);
      }
    }
  }
  return arr.map((el) => [String(el.shift()), el.length]);
};
console.log(orderedCount("abracadabra"));
