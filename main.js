function invertedRanges(r,a=[]) {
    if(!r.length)return [[0,100]]
    r=r.sort((a,b)=>a[0]-b[0]).reduce((a,c)=>{
      if(a.length&&c[0]<=a[a.length-1])a[a.length-1]=Math.max(c[1],a[a.length-1])
      else a.push(c)
      return a
    },[])
    if(r[0][0]>1)a.push([0,r[0][0]-1])
    for(let i=0;i<r.length;i++){
      if(i!==r.length-1&&Math.abs(r[i+1][0]-r[i][1])>1)a.push([r[i][1]+1,r[i+1][0]-1])
      if(i===r.length-1&&r[r.length-1][1]<100)a.push([r[r.length-1][1]+1,100])
    }
    return a
  }

console.log(invertedRanges([ [ 40, 46 ], [ 48, 52 ], [ 62, 63 ] ]))