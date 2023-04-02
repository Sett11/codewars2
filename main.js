function podium(a,c=-1000,j=-1000,i=-1000){
  if(Object.entries(a).every(e=>!e[1].length))return {}
  const b=Object.entries(a).filter(e=>e[1].length).map(e=>[e[0],e[1].reduce((a,c)=>a+c,0)]).sort((a,b)=>b[1]-a[1])
  b.forEach(e=>c=Math.max(c,e[1]))
  b.filter(e=>e[1]!==c).forEach(e=>j=Math.max(j,e[1]))
  b.filter(e=>e[1]!==c&&e[1]!==j).forEach(e=>i=Math.max(i,e[1]))
  let r={
    'gold':{
      'score':c,
      'players':b.filter(e=>e[1]===c).map(e=>e[0]).sort()
    },
    'silver':{
      'score':j,
      'players':b.filter(e=>e[1]===j).map(e=>e[0]).sort()
    },
    'bronze':{
      'score':i,
      'players':b.filter(e=>e[1]===i).map(e=>e[0]).sort()
    }
  }
  if(r.gold.players&&r.gold.players.length>1){
    r.bronze=r.silver;delete r.silver
  }
  if(r.silver&&r.silver.players.length>1){
    delete r.bronze
  }
  if(r.silver&&r.bronze&&r.silver.score===r.bronze.score&&r.silver.players.join``===r.bronze.players.join``){
    delete r.bronze
  }
  if(r.bronze&&!r.bronze.players.length)delete r.bronze
  if(r.silver&&!r.silver.players.length)delete r.silver
  if(r.gold.players.length>2){
    r={'gold':r.gold}
  }
  return r
}

console.log(podium({"Ayoub":[0,0,0,0,0,0],"Manel":[0,0,0],"David":[0,0,0,0,0,0,0],"Sandra":[0,0],"Keren":[0],"Nabil":[0,0,0,0,0,0,0,0],"Fatoumata":[0,0,0,0],"Aude":[0,0,0,0,0,0,0],"Souleymane":[0],"Inaya":[0,0,0,0,0,0,0,0],"Rafael":[0,0,0,0],"John":[0,0,0,0,0,0,0,0,0],"Valentine":[0,0],"Ian":[0,0,0,0,0,0,0],"Amandine":[0,0,0,0],"Paul":[0,0,0,0,0,0,0],"Marvin":[0,0,0],"Eliana":[0,0,0,0,0,0,0,0],"Selene":[0,0,0,0,0,0,0,0,0,0],"Charlie":[0,0,0,0],"Sue":[0,0,0,0,0,0,0,0,0,0]}))