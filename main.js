function updateInventory(c,n) {
  return c.map((e,i,v)=>{
    for(let i=0;i<n.length;i++){
        if(e[1]===n[i][1]){
            e.push(n[i][0])
            n[i]='&'
        }
    }
    return e
  }).concat(n).filter(e=>e!=='&').sort((a,b)=>a[1].localeCompare(b[1])).map(e=>{
    if(e[2])e[0]+=e[2]
    return [e[0],e[1]]
  })
}

console.log(updateInventory([
    [25, 'HTC'],
    [1000, 'Nokia'],
    [50, 'Samsung'],
    [33, 'Sony'],
    [10, 'Apple']
  ],[
    [5, 'LG'],
    [10, 'Sony'],
    [4, 'Samsung'],
    [5, 'Apple']
  ]))