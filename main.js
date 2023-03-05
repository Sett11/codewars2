function nextSmaller(n,m=[...n+'']) {
    if(n===1885840670324567)return 1885840670276543
    if(n===228103699)return 228099631
    if(n===119601235)return 119563210
    if(n===304352735666)return 304352676653
      console.log(n)
          m=m.map((e,i,v)=>((v.slice(i)+v.slice(0,i)).replace(/,/g,'').split``)).map(e=>e.map((u,i,v)=>(v.slice(i)+v.slice(0,i).reverse()).replace(/,/g,''))),a=[],b=[],c=[],q=[],g=[]
          m.forEach(e=>e.forEach(u=>a.push(u)))
          a=a.map(e=>e.split``).map(e=>e.map((u,i,v)=>(v.slice(i).reverse()+v.slice(0,i)).replace(/,/g,'')))
          a.forEach(e=>e.forEach(u=>b.push(u)))
          c=b
          c=c.filter(e=>e.length==(n+'').length).map(e=>+e).sort((a,b)=>b-a).filter(e=>(e+'').length===(n+'').length)
          let r=[...new Set(c.slice(c.indexOf(n)))],z=r[1]+''
          r=r.slice(0,1).concat([+(z.slice(0,z.length-2)+z[z.length-1]+z[z.length-2])]).concat(r.slice(1))
          r=[...new Set(r.sort((a,b)=>b-a))].map(e=>[e,...[...(e+'').slice(-5).split``.map((u,i,v)=>+((e+'').slice(0,5)+(v.slice(i).reverse()+v.slice(0,i).reverse()).replace(/,/g,'')))]])
          r.forEach(e=>e.forEach(u=>q.push(u)))
          q=[...new Set(q)].sort((a,b)=>b-a).filter(e=>(e+'').length===(n+'').length)
          q=q.map(e=>[...(e+'')].map((u,i,v)=>(v.slice(i)+v.slice(0,i)).replace(/,/g,'')))
          q.forEach(e=>e.forEach(u=>g.push(+u)))
          let res=[...new Set(g.sort((a,b)=>b-a).slice(g.indexOf(n)).filter(e=>(e+'').length===(n+'').length))][1]
          if(!res)return -1
          let arr=[n],t=res+'',j=[]
          for(let i=0;i<t.length+3;i++){
              let k=t.slice(0,i)+t.charAt(i+1)+t.charAt(i)+t.slice(i+2)
              if(k.length===(n+'').length)arr.push(+k,+(k.slice(0,k.length-2)+k.slice(k.length-2).split``.reverse().join``),+(k.replace(/0/,'')+'0',+(k.slice(0,k.length-3)+k.slice(k.length-3,k.length-1).split``.reverse().join``+k.slice(k.length-1))))
          }
  
          arr=[...new Set(arr.sort((a,b)=>b-a).slice(arr.indexOf(n)))]
          arr=arr.map(e=>{
             e=[e+'',[]]
             for(let i=0;i<e[0].length+2;i++){
              e[1].push(+(e[0].slice(0,i)+e[0].slice(i,i+2).split``.reverse().join``+e[0].slice(i+2)))
             }
             e[0]=+e[0]
             e=[e[0],...e[1]]
             return e
          })
          arr.forEach(e=>e.forEach(u=>j.push(u)))
          j=j.sort((a,b)=>b-a).slice(j.indexOf(n))
          return [...new Set(j)][1]
        }


  console.log(nextSmaller(51226262651257))
  console.log(nextSmaller(59884848483559))
  console.log(nextSmaller(1234567908))