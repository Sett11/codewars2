function findMatchedByPattern(p){
  return function(a){
    if([...p].some(e=>![...a].includes(e)))return 1==2
    a=[...a],v=[...p]
    if([...new Set(p)].length===p.length)return [...new Set(a.filter(e=>v.includes(e)))].join``.match(p)?1==1:1==2
    a=a.filter(e=>v.includes(e))
    for(let i=0;i<a.length-1;i++){
      if(v.indexOf(a[i])===v.lastIndexOf(a[i])&&a[i]===a[i+1]){
        a.splice(i+1,1);i--
      }
    }
    return a.join``.slice(0,p.length)===p
  }
}

const p=findMatchedByPattern('tit')

console.log(p('multiplicity'))