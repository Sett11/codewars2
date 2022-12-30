function reverseByCenter(s){
    const len = Math.floor(s.length / 2)
    if(s.length % 2 !== 0){
        return s.slice(len+1, s.length) + s[len] + s.slice(0, len)
    }
    return s.slice(len, s.length) + s.slice(0, len)
  }
  console.log(reverseByCenter('secret'))