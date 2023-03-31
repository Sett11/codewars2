function badApples(a) {
  for(let i=0;i<a.length;i++){
    if(a[i].every(e=>!e)){
      a.splice(i,1);i--
    }
    if(a[i]&&a[i].some(e=>!e)){
      a[i]=a[i].filter(e=>e)
      for(let j=i+1;j<a.length;j++){
        if(a[j].every(e=>!e)){
          a.splice(j,1);j--
        }
        if(a[j].some(e=>!e)){
          a[j]=a[j].filter(e=>e);a[i].push(a[j][0]);a.splice(j,1);i=j-1;break
        }
        if(j===a.length-1&&!a[j].some(e=>e)){
          a.splice(i,1);i-=1;break
        }
      }
    }
  }
  return a.filter(e=>e.length===2&&!e.some(e=>!e))
}

  console.log(badApples([
    [ 2, 1 ], [ 6, 0 ],
    [ 3, 2 ], [ 6, 6 ],
    [ 6, 3 ], [ 0, 0 ],
    [ 0, 4 ], [ 7, 2 ]
  ]))