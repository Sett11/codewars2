function decode(s,a=[]){
     for(let i=0;i<s.length;i++){
      if(s[i].match(/\d/)&&s[i-1]==='\\'){
        for(let j=i;j<s.length;j++){
            if(!s[j].match(/\d/)){
                a.push(s.slice(j, i+ +s.slice(i,j)+(j-i)))
                i+=s.slice(j, i+ +s.slice(i,j)+(j-i)).length+s.slice(i,j).length
                break
            }
        }
      }
      if(!s[i])continue
      if(s[i].match(/[a-zA-Z0-9\.]/))a.push(s[i])
     }
     return a.filter(e=>e)
  }

console.log(decode( 'iObp\\4gef2lnYsS\\5g8clhCdUpBLK\\5dlnbLv\\2lvd1oTH'))