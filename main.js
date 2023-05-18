function solution(s,a=[]){
    if(!s||s.match(/[^0-9,]/))return 0
    if(s.length===1)return 1
    let m=[...new Set(s.split`,`)].filter(e=>e.length===2).map(e=>[+e[0],+e[1]]).sort((a,b)=>a[0]-b[0]||a[1]-b[1])
    for(let i=0;i<m.length;i++){
      let t=[m[i]]
      for(let j=0;j<m.length;j++){
        if(t.some(e=>e[0]===m[j][0]&&Math.abs(m[j][1]-e[1])===1||e[1]===m[j][1]&&Math.abs(m[j][0]-e[0])===1)&&m[j][0]!==undefined){
          t.push(m[j])
          m[j]=[]
          j=0
        }
      }
      if(t[0][0]!==undefined)a.push(t)
    }
    return Math.max(...a.map(e=>[...new Set(e)].length))
  }

console.log(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'))
console.log(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,46'))