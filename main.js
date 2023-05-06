function catchThief(s,n=0){
  for(let i=0;i<s.length;i++){
    if(s[i].match(/\d/)){
      let x=(i-+s[i]),y=i+ (+s[i]+1),t=s.slice(x<0?0:x,y),tt=t.replace(/X/g,'#')
      n+=t.replace(/[^X]/g,'').length
      s=s.slice(0,x<0?0:x)+tt+s.slice(y)
    }
  }
  return n
}

console.log(catchThief('X5X#3X###XXXX##1#X1X'))
console.log(catchThief('X1X#2X#XX'))
console.log(catchThief('#82XXX9XX#X92#X1##61X44XXX2##X'))
console.log(catchThief('X#X1#X9XX'))
console.log(catchThief('3X29#4X9X####XX15#9##XX#XX7##XXX58XX#2X'))