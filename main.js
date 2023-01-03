function daysRepresented(trips) {
    const res = []
  const arr = trips
    .map((el) => [el, []])
    .map((el) => {
      if (el[0][1] > el[0][0]) {
        for (let i = el[0][0]; i <= el[0][1]; i++) {
          el[1].push(i);
        }
      }
      return el;
    })
    .map((el) => el[1]).map(el=>{
        for(let i = 0; i < el.length; i++){
            res.push(el[i])
        }
    })
  return [...new Set(res)].length
}

console.log(
  daysRepresented([ [ 54, 93 ],
    [ 8, 43 ],
    [ 101, 128 ],
    [ 17, 27 ],
    [ 171, 180 ],
    [ 210, 220 ] ])
);
