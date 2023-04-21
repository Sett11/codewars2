const f=function(h){
    const q=s=>[s.map(e=>e[0]),s.map(e=>e[1])]
    const r=x=>Object.values(x.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b-a)
    const v=x=>{
        const res1=x.map(e=>e.match(/\d/)?+e:e==='T'?10:e==='J'?11:e==='Q'?12:e==='K'?13:e==='A'?14:0).sort((a,b)=>b-a),res2=[]
        for(let i=0;i<res1.length-1;i++)res2.push(Math.abs(res1[i]-res1[i+1]))
        return [res1,res2]
    }
    const z=(a,b,c)=>{
        const s=b[0].reduce((a,c)=>a+c,0),v=b[1].every(e=>e===1)
        if(a.length===5&&c&&v)return [0,s]
        if(a.length===2&&a[0]===4)return [1,s]
        if(a.length===2&&a[0]===3)return [2,s]
        if(c&&!v)return [3,s]
        if(a.length===5&&!c&&v)return [4,s]
        if(a.length===3&&a[0]===3)return [5,s]
        if(a.length===3&&a[0]===2)return [6,s]
        if(a.length===4&&a[0]===2)return [7,s]
        return [8,s]
    }
    const p=q(h)
    const p1=r(p[0])
    const p2=v(p[0])
    let p3=false
    if(p[1].every(e=>e===p[1][0]))p3=true
    const res=[...z(p1,p2,p3)]
    return res
}

const F=(a,l)=>{
  const t=[]
  if(l===1)t.push(...a.map(e=>[e]))
  else{
    for(let i=0;i<a.length;i++)t.push(...F(a.slice(i+1),l-1).map(e=>[a[i], ...e]))
  }
  return t
}

function hand(h,c){
  const o=['straight-flush','four-of-a-kind','full house','flush','straight','three-of-a-kind','two pair','pair','nothing']
  h=h.map(e=>e.replace(/10/,'T')),c=c.map(e=>e.replace(/10/,'T'))
  const n=x=>x.match(/\d/)?+x:x==='T'?10:x==='J'?11:x==='Q'?12:x==='K'?13:x==='A'?14:0
  const p=F(c,3).map(e=>[h.concat(e),f(h.concat(e))])
  const t=F(c,4).map(e=>[[h[0]].concat(e),f([h[0]].concat(e))])
  const d=F(c,4).map(e=>[[h[1]].concat(e),f([h[1]].concat(e))])
  const e=[c,f(c)]
  
  let s=(p.concat(t).concat(d))
  s.push(e)
  s=s.sort((a,b)=>a[1][0]-b[1][0]||b[1][1]-a[1][1]).filter((e,i,v)=>e[1][0]===v[0][1][0]&&e[1][1]===v[0][1][1]).map(e=>[e[0],o[e[1][0]]])
  let y=s[0]
  s=y
  s[0]=s[0].map(e=>e[0].match(/\d/)?[+e[0],e[0]]:e[0]==='T'?[10,e[0]]:e[0]==='J'?[11,e[0]]:e[0]==='Q'?[12,e[0]]:e[0]==='K'?[13,e[0]]:e[0]==='A'?[14,e[0]]:0).sort((a,b)=>b[0]-a[0]).map(e=>e[1])
  if(s[1]==='pair'){
    s[0]=Object.entries(s[0].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
    let v=s[0].shift()
    s[0]=s[0].map(e=>[e,n(e)]).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
    s[0].unshift(v)
  }
  if(s[1]==='two pair'){
    s[0]=Object.entries(s[0].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
    let v=s[0].shift()
    let z=s[0].shift()
    let x=[v,z].map(e=>[e,n(e)]).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
    s[0]=s[0].map(e=>[e,n(e)]).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
    s[0]=x.concat(s[0])
  }
  if(s[1]==='three-of-a-kind'){
    s[0]=Object.entries(s[0].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
    let v=s[0].shift()
    s[0]=s[0].map(e=>[e,n(e)]).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
    s[0].unshift(v)
  }
  if(s[1]==='four-of-a-kind'||s[1]==='full house')s[0]=s[0]=Object.entries(s[0].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
  return {type:s[1],ranks:s[0].map(e=>e==='T'?'10':e)}
}

console.log(hand(['2♠','3♦'],['2♣','2♥','3♠','3♥','2♦']))
console.log(hand(['J♠','K♦'],['J♣','K♥','9♥','2♥','3♦']))
console.log(hand([ 'A♠', 'K♦' ], [ 'J♥', '5♥', '10♥', 'Q♥', '3♥' ]))