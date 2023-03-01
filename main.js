twistedSum=n=>Array(n).fill(1).map((e,i)=>(i+1)<10?i+1:[...(i+1)+''].reduce((a,c)=>+a+ +c,0)).reduce((a,c)=>a+c)
console.log(twistedSum(10))