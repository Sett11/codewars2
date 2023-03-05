maxContiguousSum=(a,arr=[])=>{
    arr.push(a.reduce((a,c)=>a+c,0))
    for(let i=0;i<a.length+1;i++){
        for(let j=i;j<a.length+1;j++){
            let tmp=a.slice(i,j),s=tmp.reduce((a,c)=>a+c,0)
            if(s>Math.max(...arr))arr.push(s)
        }
    }
    return Math.max(...arr)
}

console.log(maxContiguousSum([
    -8, 1,  7, -2,
    -3, 4, -2,  5
  ]))