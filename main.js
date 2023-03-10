function sepStr(s,a=[]){
  s=s.split` `.map((e,i,v)=>(e+' '.repeat(Math.max(...v.map(u=>u.length))-e.length)).split``.map(z=>z===' '?'':z))
  for(let i=0;i<s[0].length;i++){
    let innerArr=[]
    for(let j=0;j<s.length;j++){
      innerArr.push(s[j][i])
    }
    a.push(innerArr);innerArr=[]
  }
  return a
}
console.log(sepStr("The Mitochondria is the powerhouse of the cell"))