narcissistic=n=>[...n+''].map((e,i,a)=>e**a.length).reduce((a,c)=>a+c,0)===n

console.log(narcissistic(153))