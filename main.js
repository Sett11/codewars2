function halfIt(n){
    if(typeof n!='number')return 0
    return Number((n+'').replace(/\d/g,e=>Math.round(e/2)))
}

console.log(halfIt(-2.22))