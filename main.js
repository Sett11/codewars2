function happyNumbers(x){
    const isHappy=n=>{
        if(n===1)return true
        const a=[n]
        while(1){
            n=[...n+''].map(e=>+(e**2)).reduce((a,c)=>a+c)
            if(a.includes(n))return false
            if(n===1)return true
            a.push(n)
        }
      }
  const arr=Array(x).fill(1).map((e,i)=>i+1)
  return arr.filter(e=>isHappy(e))
}

  console.log(happyNumbers(100))