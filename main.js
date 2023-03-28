function checkUser(m,a='olzeasbtBg'.split``,n=[...m].map((e,i)=>+e===+e?a[+e]:e).join``.toLowerCase()){
  const r=100*parseInt([...'mxyzptlk'].map(e=>n.includes(e)?1:0).join``,2)/255
  return r<1?"This one's too clean, should be a bot.":r<50?"This one seems ok, may be there's still some humans around here...":r<90?"This one's probably an alien from 5th dim, be careful!":"Yeeerk!!! Mr Mxyztplk himself the imp of imps! Only Superman can beat him!"
}

console.log(checkUser('Kltpzyxm'))