function alphabetWar(c,s=[...('oo'+c+'oo')],l=0,r=0,left=['t','s','b','p','w'],right=['j','z','d','q','m']){
  for(let i=2;i<s.length-2;i++){
    if(s[i]===left[0]&&right.includes(s[i+1])&&s[i+1]!==right[0]&&s[i+2]!==right[0]){
        s[i+1]=left[right.indexOf(s[i+1])]
    }
    if(s[i]===left[0]&&right.includes(s[i-1])&&s[i-1]!==right[0]&&s[i-2]!==right[0]){
        s[i-1]=left[right.indexOf(s[i-1])]
    }
    if(s[i]===right[0]&&left.includes(s[i+1])&&s[i+1]!==left[0]&&s[i+2]!==left[0]){
        s[i+1]=right[left.indexOf(s[i+1])]
    }
    if(s[i]===right[0]&&left.includes(s[i-1])&&s[i-1]!==left[0]&&s[i-2]!==left[0]){
        s[i-1]=right[left.indexOf(s[i-1])]
    }
  }
 s.slice(2,-2).forEach(e=>left.includes(e)?l+=left.indexOf(e):right.includes(e)?r+=right.indexOf(e):0)
 return r>l?'Right side wins!':r<l?'Left side wins!':"Let's fight again!"
}

console.log(alphabetWar('ztztztzs'))
console.log(alphabetWar('zdqmwpbs'))
console.log(alphabetWar('wololooooo'))