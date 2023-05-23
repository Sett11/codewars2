minValue=(a,n,r=[])=>{
    for(i=-1;++i<=a.length-n;)r.push(Math.min(...a.slice(i,i+n)))
    return r
}

  console.log(minValue([1,2,3,10,-5],2))