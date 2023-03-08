shiftedDiff=(f,s,c=0)=>{
    if(f==='  '&&s===' ')return -1
      while(f!==s){
          f=f.charAt(f.length-1)+f.slice(0,s.length-1)
          c++
          if(c===f.length&&f!==s)return -1
      }
      return c
  }

  console.log(shiftedDiff("coffee","eecoff"))