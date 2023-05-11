isbnConverter=(s,n='978',c=[...n+s.slice(0,-2).replace(/[^\d]/g,'')].map((e,i)=>i%2===0?+e:+e*3).reduce((a,c)=>a+c,0)%10)=>n+'-'+s.slice(0,-1)+(!c?c:10-c)


console.log(isbnConverter('1-85326-158-0'))