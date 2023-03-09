digitAll=x=>typeof x!=='string'?'Invalid input !':x.replace(/[^\d]/g,'')

  console.log(digitAll("wai8, where are yo9u goin'?"))