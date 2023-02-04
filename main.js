function splitText(t, m) {
  if (!t || t === "") return [];
  if (t.trim().length <= m) return [t];
  t = [...t];
  const arr = [],res = [];
  t.forEach((e, i) => (e === " " ? arr.push(i) : null));
  let innerArr=[]
  for (let i = 0, c = 0; i < t.length; i++, c++) {
    if (t[i] === ' ') {
      innerArr.push(i)
    }
    if (c === m&&t[c]===' ') {
      innerArr.push(c)
      res.push(t.slice(0,innerArr[innerArr.length-1]));
      t = t.slice(innerArr[innerArr.length-1]+1),c=0
    }
    if (c === m) {
      res.push(t.slice(0,innerArr[innerArr.length-1]));
      t = t.slice(innerArr[innerArr.length-1]+1),c=0
    }
  }
  for (let i = 0, c = 0; i < t.length; i++, c++) {
    if (t[i] === ' ') {
      innerArr.push(i)
    }
    if (c === m&&t[c]===' ') {
      innerArr.push(c)
      res.push(t.slice(0,innerArr[innerArr.length-1]));
      t = t.slice(innerArr[innerArr.length-1]+1),c=0
    }
    if (c === m) {
      res.push(t.slice(0,innerArr[innerArr.length-1]));
      t = t.slice(innerArr[innerArr.length-1]+1),c=0
    }
  }
  res.push(t)
  return res.map((el) => el.join``)
}
console.log(splitText('A b C d E', 5));
console.log(splitText('Abc cde', 5));
console.log(splitText("Lorem ipsum dolor sit amet, consectetur adipiscing", 15));