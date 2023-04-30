function sc(s,a){
  s=s.replace(/(.)\1*/g,' $& ').split` `
  while(a.length){
    t=a.shift(),m=100
    s.forEach(e=>e[0]==t?m=Math.min(m,e.length):0)
      for(i=0;i<=s.length;i++){
        if(i==s.length){
          s.push(t)
          break
        }
        if(s[i][0]==t&&s[i].length==m){
          s[i]+=t
          break
        }
      }
    }
  return s.join``
}

console.log(sc("x",["x","x","x"]))
console.log(sc("abababab",["a","a","a","a","b","b","b","b"]))
console.log(sc('mmilllccckkkiiiqqwwttllllllpppcccccccccpppppppppxxvss'  ,['i','i','p','m','i','k','c','i']))