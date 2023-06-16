function isTouhouTitle(s,a=['of','in','at','to','and','a','an','the'],t=s.slice(s.indexOf(' ')+1).split` `.map(e=>!e.match(/[a-z]/gi)?e:e.replace(/[^a-z0-9]/gi,''))){
  return [...s.slice(0,5)].every(e=>(e).charCodeAt()>19000&&(e).charCodeAt()<46000)&&s.slice(0,2)==='東方'&&s.slice(0,s.indexOf('～')-1).length===5&&s.slice(5,8)==='　～ '&&s[s.length-1]==='.'&&t.filter(e=>!a.includes(e)).every(e=>e[0].match(/[A-Z]/))&&t.map(e=>[e,e.toLowerCase()]).filter(e=>a.includes(e[1])).every(e=>e[0]===e[1])&&t.every(e=>!e.match(/\d/))
}

console.log(isTouhouTitle("東方鞩鱽羧　～ Fashion Limit."))