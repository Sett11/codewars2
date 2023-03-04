pigLatin=s=>{
    if (s.replace(/[a-zA-Z]/g, "").length !== 0) return null
    if (s[0].match(/a|e|u|i|o/gi)) return s.toLowerCase() + "way"
    s=[...s],r=0
    for(let i=0;i<s.length;i++){
        if(s[i].match(/a|e|u|i|o/gi)){r=i;break}
    }return (s.slice(r).join``+s.slice(0,r).join``).toLowerCase()+'ay'
  }

  console.log(pigLatin('ppNIM'))