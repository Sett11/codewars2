function findDuplicatePhoneNumbers(a){
  const o={'ABC':2,'DEF':3,'GHI':4,'JKL':5,'MNO':6,'PRS':7,'TUV':8,'WXY':9}
  a=a.map(e=>{
    e=[...e.replace(/[^A-z0-9]/g,'').toUpperCase()]
    e=e.map(u=>{
      for(let i in o){
        if(i.match(u))u=o[i]
      }
      return u
    }).join``
    return [e.slice(0,3)+'-'+e.slice(3),1]
  }).sort()
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
      if(a[j][0]===a[i][0]){
        a[i][1]++
        a[j][0]=0
      }
    }
  }
  return a.filter(e=>e[0]&&e[1]>1).map(e=>`${e[0]}:${e[1]}`)
}

console.log(findDuplicatePhoneNumbers([
"4873279",
"ITS-EASY",
"888-4567",
"3-10-10-10",
"888-GLOP",
"TUT-GLOP",
"967-11-11",
"310-GINO",
"F101010",
"888-1200",
"-4-8-7-3-2-7-9-",
"487-3279"]))