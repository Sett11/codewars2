function isPrimeHappy(n,r=[],c=2){
    const f=x=>{if(x<2)return !1;if(x===2)return !0;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return !1}return !0}
    while(c<n){
      if(f(c))r.push(c);c++
    }
    return n>2&&r.length&&r.reduce((a,c)=>a+c)%n===0
  }
  
console.log(isPrimeHappy(25))