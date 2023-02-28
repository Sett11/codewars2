function charConcat(s){
  let c1=s.slice(0,~~s.length/2),c2=[...s.slice(~~s.length/2)].reverse().join``,str=''
  for(let i=0;i<c1.length;i++){
    str+=c1[i]+c2[i]+(i+1)
  }
  return str
}
console.log(charConcat("CodeWars"))