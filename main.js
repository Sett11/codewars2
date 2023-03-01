function groupAnagrams(w){
  w=w.map(e=>[e,[...e].sort().join``]).sort((a,b)=>a[1].localeCompare(b[1])).map(e=>[e[0]])
  for(let i=0;i<w.length-1;i++){
    if([...w[i][0]].sort().join``===[...w[i+1][0]].sort().join``){
      w[i]=w[i].concat([w[i+1][0]])
      w.splice(i+1,1)
      i--
    }
  }return w
}
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))