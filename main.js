function smallestDiff(a1,a2){
    if(a1.length&&!a2.length)return Math.min(...a1)
    if(a2.length&&!a1.length)return Math.min(...a2)
    if(!a1.length&&!a2.length)return -1
    a1=a1.sort((a,b)=>a-b),a2=a2.sort((a,b)=>a-b),r=[]
    for(let i=0;i<a1.length;i++){
        for(let j=0;j<a2.length;j++){
            r.push(Math.abs(a1[i]-a2[j]))
        }
    }
    return Math.min(...r)
}
  console.log(smallestDiff([1, 3, 5, 23, 5],[45, 34, 67, 2, 0]))