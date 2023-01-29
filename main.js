function sc(r) {
  console.log(r)
  r = r.replace(/\//g, ""), arr = []
  for (let i = 1; i < r.length; i++) {
    let tmp = r.slice(0, i),
      counter = r.length, count = 1
    while (counter >= 0) {
      if (tmp.repeat(counter) === r) {
        arr.push(tmp)
        break;
      }
      counter--;
    }
    while (count < r.length) {
      if (tmp.repeat(count) === r) {
        arr.push(tmp)
        break;
      }
      count++;
    }
  }
  if(arr.length===0){
    return '/' + r + '/'
  }
  const res = arr.sort((a,b)=>a.length-b.length)[0]
  const finRes = res.length===1 ? `/${res}{${r.length/res.length}}/` : `/(${res}){${r.length/res.length}}/`
  return finRes.length < r.length + 2 ? finRes : '/' + r + '/'
}
console.log(sc("/IqF9X/"));
