function closest(strng) {
  if(strng.length === 0){
    return []
  }
  const arr = [], arr2 = [], db = strng.split` `.map((el) => [el, [], []]).map((el,i) => {
    el[2].push(el[0])
    el[1].push(i)
    el[0] = el[0].split``.map(Number).reduce((acc,curr)=>acc+curr,0)
    el[0] = [el[0]]
    return el
  }).sort((a,b)=>a[0] - b[0] || a[1] - b[1]).map((el) => {
    arr.push(el[0][0])
    return el
  })
  for(let i = 0; i < arr.length; i++){
    arr2.push(arr[i+1] - arr[i])
  }
  const res = arr2.map(el => Number.isNaN(el) || el !== el ? '&' : el).filter(el => el !=='&')
  const min = Math.min(...res)
  const ind = res.indexOf(min)
  const F = db.slice(ind, ind + 2)
  return [[F[0][0][0], F[0][1][0], Number(F[0][2][0])], [F[1][0][0], F[1][1][0], Number(F[1][2][0])]]
}
console.log(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52"))