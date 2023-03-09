function deficientlyAbundantAmicableNumbers(a,b,c=0,d=0) {
    for(let i=1;i<Math.max(a,b)/2+1;i++){
      if(a%i===0&&i<a/2+2)c+=i
      if(b%i===0&&i<b/2+2)d+=i
    }
    const r=a<c?'abundant':a===c?'perfect':'deficient',z=b<d?'abundant':b===d?'perfect':'deficient',v=a===d&&b===c&&a!==b?'amicable':'not amicable'
    return `${r} ${z} ${v}`
  }

  console.log(deficientlyAbundantAmicableNumbers(299920,9284))