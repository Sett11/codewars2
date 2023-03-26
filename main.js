function findTheMissingTree(t){
  t=Object.entries(t.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))
  while(1){
    let tmp=t.shift()
    if(t.every(e=>e[1]===t[0][1]))return +tmp[0]
    t.push(tmp)
  }
}

console.log(findTheMissingTree([1, 1, 1, 1, 1, 1, 1, 22, 22, 22, 22, 22, 22, 22, 3, 3, 3, 3, 3, 3]))