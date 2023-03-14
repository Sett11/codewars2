findOddDigits=(n,k,m=[...n+''].map(Number).filter(e=>e%2!==0).slice(0,k).join``)=>!m||k>m.length||k>[...n+''].length?0:m

console.log(findOddDigits(123456789111,5))