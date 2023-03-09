abundantNumber=n=>{
    const arr=[]
    for(let i=1;i<n/2+1;i++){
        if(n%i===0)arr.push(i)
    }
    return arr.reduce((a,c)=>a+c,0)>n
}

console.log(abundantNumber(18))