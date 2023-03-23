function searchSubstr(f,s,a=true,c=0){
    if(!f||!s)return 0
      for(let i=0;i<f.length;i++){
          if(f.slice(i,i+s.length)===s){
              c++
              if(!a)i+=s.length
          }
      }
      return c
  }


  console.log(searchSubstr('aaa', 'aa',false))