function winners(p1,p2,p3,c,d){
      const f=x=>{
          let r=x.map(e=>e.match(/\d/)?+e:e==='A'?1:10).reduce((a,c)=>a+c,0)
          return r<12&&x.includes('A')?r+10:r
      }
      let a=[p1,p2,p3].map((e,i)=>[e,f(!e.length?['0']:e),`Player ${i+1}`]).filter(e=>e[1]<22)
      let t=[[c,f(c)]].map(e=>{
          while(e[1]<17){
              e[0].push(d.shift())
              e[1]=f(e[0])
          }
          return e
      }).flat()
      if(t[1]>21)return a.map(e=>e[2]).join`, `
      if(!a.length&&t[0]<22)return ''
      let r=[...a.map(e=>[e[0],e[1]]),t]
      if(r.every(e=>e[1]===r[0][1]&&e[0].length===r[0][0].length&&e[1]===21))return ''
      if(t[1]===21&&a[0][1]===21&&t[0].length===2&&a[0][0].length===2||t[1]===21&&t[0].length>2&&a.every(e=>e[1]===21&&e[0].length>2))return ''
      a=a.filter(e=>e[1]>=t[1])
      if(t[0].length===2&&t[1]===21)a=a.filter(e=>e[0].length===2)
      if(t[1]<21)a=a.filter(e=>e[1]>t[1])
      if(!a.length)return ''
      if(t[1]===21&&t[0].length>2&&a[0][0].length>2&&a[0][1]===21)return ''
      if(t[0].length===2&&!t[0].includes('10')&&t[1]===21&&a[0][1]===21&&a[0][0].includes('10'))return ''
      return a.map(e=>e[2]).join`, `
  }

  console.log(winners(
    [ '9', '2', '4', '6' ], [], [ '7', '5', '2' ], [ '2', '10' ], [
        '9', 'J', '5', '4', 'J',
        '3', '9', '5', '5', '5',
        'K', 'J', 'A', '4', '10',
        'A', '4', '5', '2', '6',
        '8'
      ]))


// function getGeneration(a,n,m=a.slice()){
//     return c
// }

// console.log(getGeneration([
//     [1,0,0],
//     [0,1,1],
//     [1,1,0]
// ],1))