function findAB(a,c){
    const r=a.reduce((a,c)=>{
        if(!a[c])a[c]=0
        a[c]+=1
        return a
    },{}),u=new Set(a)
    for(let i of u){
        let t=c/i
        if(u.has(t)&&((i===t&&r[i]>1)||i!==t))return [i,t===0?0:t]
    }
    return null
}

console.log(findAB([1,2,3],6))
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4],4))
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4],0))