function madShout(s){
    return `O${'i'.repeat(Math.max(Math.ceil((s.indexOf('F')-s.indexOf('Y'))/2),1))} F!`
  }

console.log(madShout('-----------------Y--------F--------------'))