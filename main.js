function possibleBase(ux){
  ex=ux.split`=`.map(e=>e.trim().replace(/ /g,'')).map((e,i)=>{
    if(i===0){
      e=[e.match(/\+|\-|\/|\*|%=\%/g)[0],e.replace(e.match(/\+|\-|\/|\*|%=\%/g)[0],' ').split` `]
      e=[e[1][0],e[0],e[1][1]]
    }return e
  })
  for(let i=2;i<=32;i++){
    if(ux.match(/[a-z]/gi)&&i<11)continue
    if(eval(`${parseInt(ex[0][0],i)}${ex[0][1]}${parseInt(ex[0][2],i)}`)===parseInt(ex[1],i))return i
  }return -1
}
console.log(possibleBase("49 * 43 = ib8"))