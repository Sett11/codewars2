factorial=n=>{
    if(n===0)return 1
    if(n>0){
        let res=1
        while(n>1){res*=n--}
        return res
    }
    if(n<0){
        let a=[]
        while(n<0){
            a.push(n)
            n+=1
        }
        return a.reduce((a,c)=>a*c)
    }
}

  console.log(factorial(5))