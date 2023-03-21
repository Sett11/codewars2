falsyOrTruthy=a=>a.length%2===0?a.filter(e=>e):a.filter(e=>!e)

console.log(falsyOrTruthy([false,NaN,NaN,4,5,{},1]))