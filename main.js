function closestPair(a,r=[],c=10000000){
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            let s=Math.abs(a[j][0]-a[i][0])+Math.abs(a[j][1]-a[i][1])
            c=Math.min(c,s)
            r.push([s,[a[i],a[j]]])
        }
    }
    return r.filter(e=>e[0]==c)[0][1]
}

console.log(closestPair([
    [ 2000, 2000 ],
    [ 2000, 8000 ],
    [ 5000, 5000 ],
    [ 6000, 3000 ],
    [ 6000, 7000 ],
    [ 7000, 4000 ],
    [ 7000, 9000 ]
  ]))