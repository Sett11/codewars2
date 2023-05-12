function nextGen(x){
      let a=JSON.parse(JSON.stringify(x))
      if(x.every(e=>e.length===1)||x.length===1){
        let t=x.flat(),y=[]
        for(let i=0;i<t.length;i++)if(t[i]===1)y.push([t[i],t.slice(i-1,i+2),i])
        y=y.map(e=>[e[0],[e[1][0],e[1][2]],e[2]])
        for(let i=0;i<y.length;i++)if(y[i][0]===1&&y[i][1].filter(e=>e).length>3||y[i][0]===1&&y[i][1].filter(e=>e).length<2)t[y[i][2]]=0
        return x.every(e=>e.length===1)?t.map(e=>[e]):[t]
    }
      let r=[],z=[],o=[]
      for(let i=0;i<a.length;i++){
          let iAr=[]
          for(let j=0;j<a[i].length;j++){
              let t=[[a[i][j],[i,j]]]
              if(i===0&&j===0)t.push(a[i+1][j],a[i][j+1],a[i+1][j+1])
              if(i===a.length-1&&j===a[i].length-1)t.push(a[i-1][j],a[i][j-1],a[i-1][j-1])
              if(i===0&&j===a[i].length-1)t.push(a[i][j-1],a[i+1][j],a[i+1][j-1])
              if(i===a.length-1&&j===0)t.push(a[i-1][j],a[i][j+1],a[i-1][j+1])
  
              if(i===0&&j!==0&&j!==a[i].length-1)t.push(a[i][j+1],a[i][j-1],a[i+1][j],a[i+1][j+1],a[i+1][j-1])
              if(i===a.length-1&&j!==0&&j!==a[i].length-1)t.push(a[i][j+1],a[i][j-1],a[i-1][j],a[i-1][j-1],a[i-1][j+1])
              if(j===a[i].length-1&&i!==0&&i!==a.length-1)t.push(a[i][j-1],a[i+1][j],a[i-1][j],a[i-1][j-1],a[i+1][j-1])
              if(j===0&&i!==0&&i!==a.length-1)t.push(a[i][j+1],a[i-1][j],a[i+1][j],a[i+1][j+1],a[i-1][j+1])
  
              if(i!==0&&j!==0&&i!==a.length-1&&j!==a[i].length-1)t.push(a[i][j+1],a[i][j-1],a[i+1][j],a[i-1][j],a[i+1][j+1],a[i-1][j-1],a[i+1][j-1],a[i-1][j+1])
              iAr.push(t)
          }
          r.push(...iAr)
      }
      r=r.filter(e=>{
          if(e[0][0]===1&&e.slice(1).filter(u=>u).length>1&&e.slice(1).filter(u=>u).length<4)return false
          if(e[0][0]===0&&e.slice(1).filter(u=>u).length!==3)return false
          return true
      }).map(e=>e[0])
      r.forEach(e=>e[0]===0?z.push(e[1]):e[0]===1?o.push(e[1]):0)
      for(let i=0;i<z.length;i++)a[z[i][0]][z[i][1]]=1
      for(let i=0;i<o.length;i++)a[o[i][0]][o[i][1]]=0
      return a
  }
  

console.log(nextGen([
    [
      0, 0, 0, 0, 0, 1,
      0, 0, 1, 1, 0, 1,
      1, 1, 0, 1
    ]
  ]))
