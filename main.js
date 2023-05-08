function quidditchScoreboard(t,a,o=t.split` vs `,q=['blatching', 'blurting', 'bumphing', 'haverstacking', 'quaffle-pocking', 'stooging']){
 a=a.toLowerCase()
 const v=a.match('caught snitch')
 if(v)a=a.slice(0,v.index+13)
 const f=(x,y)=>x.split`,`.filter(e=>e.match(y)).map(e=>e.replace(y,'').slice(2).trim``.toLowerCase())
 const z=x=>x.reduce((a,c)=>a+c,0)
 const r=[[o[0],f(a,o[0].toLowerCase())],[o[1],f(a,o[1].toLowerCase())]].map(e=>[e[0],e[1].map(u=>q.some(z=>u.match(z))?-30:u.match(/goal/)?10:u.match(/caught snitch/)?150:0)])
 return r.map(e=>e[1].indexOf(150)!==-1?`${e[0]}: ${z(e[1].slice(0,e[1].indexOf(150)+1))}`:`${e[0]}: ${z(e[1])}`).join`, `
}

console.log(quidditchScoreboard('Wimbourne Wasps vs Cork','Cork: Quaffle goal, Cork: Quaffle-pocking foul, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Caught Snitch, Wimbourne Wasps: Quaffle goal'))