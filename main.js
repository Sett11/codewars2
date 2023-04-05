cleanString=s=>{
  while(s.match(/\#/)){
    if(!s.match(/[^\#]/))return ''
    if(s[0]==='#')s=s.slice(1)
    s=s.replace(/.\#/,'')
  }
  return s
}


console.log(cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'))
console.log(cleanString('abc#d##c'))