function isHappy(n){
    if(n===1)return true
    const a=[n]
    while(1){
        n=[...n+''].map(e=>+(e**2)).reduce((a,c)=>a+c)
        if(a.includes(n))return false
        if(n===1)return true
        a.push(n)
    }
  }

  console.log(isHappy(1))