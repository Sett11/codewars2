function luckySevens(a,r=[],c=Array(a[0].length).fill(0)){
  a.push(c),a.unshift(c)
  a=a.map(e=>{
    e.push(0),e.unshift(0)
    return e
  })
  for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
      if(a[i][j]===7)r.push([a[i][j-1],a[i][j+1],a[i-1][j],a[i+1][j]])
    }
  }
  return r.map(e=>e.reduce((a,c)=>a+c,0)).filter(e=>Number.isInteger(Math.cbrt(e))).length
}

console.log(luckySevens([
  [ 186, 946, 992, 578, 286, 10, 295, 499, 369 ],
  [ 408, 16, 347, 608, 827, 7, 7, 727, 858 ],
  [ 5, 7, 4, 638, 409, 472, 817, 1, 531 ],
  [ 792, 2, 179, 7, 133, 684, 0, 7, 0 ],
  [ 764, 374, 962, 50, 46, 95, 474, 0, 460 ],
  [ 165, 7, 133, 5, 7, 11, 825, 40, 626 ],
  [ 240, 57, 954, 447, 2, 551, 1, 7, 17 ],
  [ 7, 738, 7, 450, 37, 7, 120, 6, 7 ],
  [ 7, 683, 902, 66, 402, 21, 870, 323, 233 ]
]))