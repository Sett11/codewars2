const calculate=(...a)=>(...b)=>a.concat(b).reduce((e,c)=>e+c,0)


console.log(calculate(21)(1))