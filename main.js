function bucketize(a,b=Object.entries(a.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))) {
  return Array(a.length+1).fill(1).map((e,i)=>[i+1,[]]).map((e,j,v)=>{
    for(let i=0;i<b.length;i++){
      if(b[i][1]===j){
        e[1].push(+b[i][0])
      }
    }
    return e[1]
  }).map(e=>!e.length?null:e)
}

console.log(bucketize([1,2,3,4,4,5,5,5]))