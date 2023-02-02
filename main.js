function mazeRunner(m, d) {
  let ind = []
  m.map((el, i) => el.map((ul, x) => (ul === 2 ? ind.push(i, x) : null)));
  let oneI = ind[0],twoI = ind[1], arr = [], res = []
    for(let i = 0; i < d.length; i++){
        if (d[i] === "N") {
            arr.push([oneI-1, twoI])
            oneI-=1
          }
          if (d[i] === "S") {
            arr.push([oneI+1, twoI])
            oneI+=1
          }
          if (d[i] === "E") {
            arr.push([oneI, twoI+1])
            twoI+=1
          }
          if (d[i] === "W") {
            arr.push([oneI, twoI-1])
            twoI-=1
          }
    }
    arr.map(el=>el[0]<0||el[1]<0||el[0]>m[0].length-1||el[1]>m[0].length-1?res.push(1): res.push(m[el[0]][el[1]]))
  return !res.some(el=>el===1)&&res.some(el=>el===3)?'Finish':res.some(el=>el===1)?'Dead':'Lost'
}
console.log(
  mazeRunner(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1],
    ],
    ["N","E","E","E","E"]
  )
);
