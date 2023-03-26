maxedOut=(a,b=a.reduce((a,c)=>a+c**3,0))=>Number.isSafeInteger(b)?b:'You\'ve pushed me to the max!'

console.log(maxedOut([-530,230,5600,40,5,7200]))
console.log(maxedOut([7600,32300,66700,22200,4554,323000,5555]))