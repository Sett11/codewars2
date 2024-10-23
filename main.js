const halfIt=n=>!Number.isInteger(n)?0:parseInt((n).toString(2).replace(/(.)\1+/g,e=>e.slice(0,Math.ceil(e.length/2))),2)

console.log(halfIt(-100))