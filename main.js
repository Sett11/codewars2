const p1 = {
  name: "JuanPablo",
  normKill: 5,
  assist: 12,
  damage: 3200,
  healing: 0,
  streak: 4,
  envKill: 1
};

const p2 = {
  name: "ProfX",
  normKill: 2,
  assist: 14,
  damage: 600,
  healing: 1500,
  streak: 0,
  envKill: 0
};

function scoring(a){
  return a.map(e=>{
    e=[e,[]]
    e[1].push(e[0].normKill*100);e[1].push(e[0].assist*50);e[1].push(e[0].damage*0.5);e[1].push(e[0].healing);e[1].push(2**e[0].streak);e[1].push(e[0].envKill*500)
    e[1]=e[1].reduce((a,c)=>a+c,0)
    return e
  }).sort((a,b)=>b[1]-a[1]).map(e=>e[0].name)
}

console.log(scoring([p1,p2]))