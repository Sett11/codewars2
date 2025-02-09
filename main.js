function countGrade(a){
    const f=(a,s,l)=>a.filter(e=>e>=s&&e<l).length
    return {S:a.filter(e=>e==100).length,A:f(a,90,100),B:f(a,80,90),C:f(a,60,80),D:f(a,0,60),X:a.filter(e=>e==-1).length}
  }

console.log(countGrade([50,60,70,80,90,100]))