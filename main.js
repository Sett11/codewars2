function transpose(m) {
    if(m.length===1)return m.flat().map(e=>[e])
      arr=[],c=1,res=[]
      for(let i=0;i<=m.length;i++){for(let j=0;j<m.length;j++){arr.push(m[j][i])}}for(let i=0;i<arr.length;i+=m.length){res.push(arr.slice(i,i+m.length))}
      return res.map(e=>e.filter(e=>e!==undefined)).filter(e=>e&&e.length)
  }
console.log(transpose([ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ], [ 1, 0, 0 ] ]))