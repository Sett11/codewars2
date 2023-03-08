function zipWith(f,a0,a1,r=[]) {
    for(let i=0;i<Math.min(a0.length,a1.length);i++){
        r.push(f(a0[i],a1[i]))
    }
    return r
}

  console.log(zipWith((a,b)=>a+b,[0,1,2,3,4,5], [6,5,4,3,2,1]))