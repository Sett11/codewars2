function expandedForm(num) {
  let arr = [];
  let indArr = [];
  const w = ("" + num).split("").map(Number);
  w.map((el, i) => {
      arr.push(el);
      indArr.push(i);
  });
  indArr = indArr.reverse()
  arr = arr.map(el => [el])
  for(let i = 0; i < arr.length; i++){
    arr[i].push(`${'0'.repeat(indArr[i])}`)
  }
  return arr.filter(el => el[0] !== 0).map(el => el.reduce((acc,curr) => acc+curr,'')).join` + `
}
console.log(expandedForm(70304));
