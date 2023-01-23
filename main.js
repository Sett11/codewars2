function mix(s1, s2) {
  const newS1 = Object.entries(s1.replace(/[^a-z]/g,'').split``.reduce((acc,curr)=>{
    acc[curr] = (acc[curr]||0)+1
    return acc
  },{})).filter(el=>el[1]>1).map(el=>[...el, 1])
  const newS2 = Object.entries(s2.replace(/[^a-z]/g,'').split``.reduce((acc,curr)=>{
    acc[curr] = (acc[curr]||0)+1
    return acc
  },{})).filter(el=>el[1]>1).map(el=>[...el, 2])
  const res = newS1.concat(newS2)
  for(let i = 0; i < res.length; i++){
    let tmp = res[i]
    for(let j = 0; j < res.length; j++){
      if(tmp[0]===res[j][0]){
        if(tmp[1]>res[j][1]){
          res[j] = '&'
        }
        if(res[j][1]>tmp[1]){
          tmp = '&'
        }
        if(tmp[0]===res[j][0]&&tmp[1]===res[j][1]&&String(tmp)!==String(res[j])){
          tmp[2] = 3
          res[j] = '&'
        }
      }
    }
  }
  const newRes = res.filter(el=>el!=='&').sort((a,b)=> b[1]-a[1] || a[2] - b[2] || a[0].localeCompare((b[0])))
  let str = ``
  for(let i = 0 ; i < newRes.length; i++){
    let count = newRes[i][2]
    if(newRes[i][2]===3){
      count = '='
    }
    str+= `${count}:${newRes[i][0].repeat(newRes[i][1])}/`
  }
  return str.slice(0,str.length-1)
}
console.log(mix("looping is fun but dangerous", "less dangerous than coding"))