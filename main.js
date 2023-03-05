function commas(n,z=n+''){
      n=(n).toFixed(3),m=n.replace(/\d+\./,''),n=[...(n.match(/\d+\./g)[0].replace(/\./,''))].reverse(),a=[]
      if(z.slice(z.indexOf('.')).replace(/\./,'').length<3)m=m.replace(/0/g,'')
      for(let i=0;i<n.length;i+=3){
          a.push(n.slice(i,i+3))
      }a=a.map(e=>e.reverse().join``).reverse().join`,`
      let r=(z[0]==='-'?'-':'')+a+(z.includes('.')?'.'+m.replace(/-/g,''):'')
      if(r[r.length-1]==='0'&&z.includes('.'))r=r.slice(0,r.length-1)
      if(r[r.length-1]==='0'&&z.includes('.'))r=r.slice(0,r.length-1)
      return r
  }

  console.log(commas(100.2346))
  console.log(commas(1000000000.23))
  console.log(commas(-171481.70013760368))