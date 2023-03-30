scoreOfDive=(a,n)=>(a.sort((a,b)=>b-a).slice(2,-2).reduce((a,c)=>a+c,0)*n).toFixed(2)

console.log(scoreOfDive([5, 6.5, 5.5, 5, 6, 4.5, 6], 3.2))