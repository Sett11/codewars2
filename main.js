add=(...a)=>![...a].length?0:Math.round([...a].reduce((a,c,i)=>a+(c/(i+1)),0))

  console.log(add(100,200,300))