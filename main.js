function abundant(n){
        for(let i=n;i>0;i--){
            let innerArr=[]
            for(let j=1;j<i/2+1;j++){
                if(i%j===0)innerArr.push(j)
            }
            if(innerArr.reduce((a,c)=>a+c,0)>i)return [[i],[innerArr.reduce((a,c)=>a+c,0)-i]]
        }
    }

console.log(abundant(100))