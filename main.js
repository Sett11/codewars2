findSubarrMaxSum=(a,arr=[],b=[])=>{
    if(a.every(e=>e<=0))return [[],0]
    arr.push(a.reduce((a,c)=>a+c,0))
    for(let i=0;i<a.length+1;i++){
        for(let j=i;j<a.length+1;j++){
            let tmp=a.slice(i,j),s=tmp.reduce((a,c)=>a+c,0)
            if(s>=Math.max(...arr)){
                arr.push(s)
                b.push(tmp)
            }
        }
    }
    b=b.filter(e=>e.reduce((a,c)=>a+c,0)===Math.max(...arr))
    if(b.length>1)b=[b]
    b.push(Math.max(...arr))
    return b
}

console.log(findSubarrMaxSum([4, -1, 2, 1, -40, 1, 2, -1, 4]))
console.log(findSubarrMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))