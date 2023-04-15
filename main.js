function summaryRanges(a){
    a=[...new Set(a)]
    for(let i=0;i<a.length-1;i++){
        if(a[i]+1===a[i+1]){
            for(let j=i;j<a.length;j++){
                if(a[j]+1!==a[j+1]){
                    let t=a.slice(i,j+1)
                    a=a.slice(0,i).concat([t[0],t[t.length-1]].join`->`).concat(a.slice(j+1))
                    break
                }
            }
        }
    }
    return a.map(e=>typeof e!=='string'?e+'':e)
}
console.log(summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]))