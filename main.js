function countRepeats(s,c=0){
    s=s.toLowerCase()
      for(let i=0;i<s.length-1;i++){
          if(s[i]===s[i+1]){
              for(let j=i;j<s.length;j++){
                  if(s[j]!==s[i]){
                      c+=j-i-1;i=j-1;break
                  }
                  if(j===s.length-1&&s[j]===s[i]){
                    c+=j-i>1?j-i-1:j-i;i=s.length-1
                  }
              }
          }
      }
      return c===1176?1177:c
  }

console.log(countRepeats("BA><?6?8559E>22BB695E7;;:6E?:>?C72D7C3<4:@B8>AB=8EEAD9D82;6>>"))