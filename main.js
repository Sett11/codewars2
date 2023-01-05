function presses(phrase) {
  return phrase.toUpperCase().split``.map((el)=>{
    if(el===' '||el==='A'||el==='D'||el==='G'||el==='M'||el==='P'||el==='T'||el==='W'||el==='1'||el==='*'||el==='#'){
      el = 1
      return el
    }
    if(el==='B'||el==='E'||el==='H'||el==='K'||el==='N'||el==='Q'||el==='U'||el==='X'||el==='0'){
      el = 2
      return el
    }
    if(el==='C'||el==='F'||el==='I'||el==='L'||el==='O'||el==='R'||el==='V'||el==='Y'){
      el = 3
      return el
    }
    if(el==='S'||el==='Z'||el === '2'||el==='3'||el==='4'||el==='5'||el==='6'||el==='8'){
      el = 4
      return el
    }
    if(el==='7'||el==='9'){
      el=5
      return el
    }
  }).filter(el=>el!==undefined).reduce((acc,curr)=>acc+curr,0)
}
console.log(presses("WHERE DO U WANT 2 MEET L8R"))